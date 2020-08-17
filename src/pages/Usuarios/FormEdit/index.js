import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import api from '../../../services/api';

const usuarioDefault = {
  nome: '',
  email: '',
  telefone: ''
}

const UsuarioForm = () => {
  const { params } = useRouteMatch();
  const [usuario, setUsuario] = useState(usuarioDefault);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    async function loadData () {
      const { data } = await api.get(`usuarios/${params.id}`);
      setUsuario(data);
    }

    loadData();
  }, [params])

  const handleAtualizarUsuario = () => {
    api.put(`usuarios`, usuario).then(response => {
      setOpen(true);
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway')
      return;

    setOpen(false);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Editar Usuário
      </Typography>

      <Grid item xs={12}>
        <TextField
          required
          value={usuario.nome}
          onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
          label="Nome"
          fullWidth
          autoComplete="shipping address-line1"
        />
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="given-name"
            value={usuario.email}
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="telefone"
            name="telefone"
            label="Telefone"
            fullWidth
            autoComplete="family-name"
            value={usuario.telefone}
            onChange={(e) => setUsuario({ ...usuario, telefone: e.target.value })}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={() => handleAtualizarUsuario()}>Editar</Button>
        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Usuário Atualizado"
        action={
          <>
            <Button color="secondary" size="small" onClick={handleClose}>
              FECHAR
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </>
  );
}

export default UsuarioForm;
