import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CustomSnackbar from '../../../components/CustomSnackbar';
import { addUsuarioRequest } from '../../../store/actions/usuarios';

const usuarioDefault = {
  nome: '',
  email: '',
  telefone: ''
}

const UsuarioFormAdd = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [usuario, setUsuario] = useState(usuarioDefault);
  const dispatch = useDispatch();

  const handleAddUsuario = () => {
    dispatch(addUsuarioRequest(usuario))
    setUsuario({ ...usuarioDefault })
    setOpenSnackbar(true);
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Adicionar Usuário
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
          <Button variant="contained" color="primary" onClick={() => handleAddUsuario()}>Adicionar</Button>
        </Grid>
      </Grid>

      {openSnackbar && <CustomSnackbar message="Usuário Adicionado" severity="success" />}
    </>
  );
}

export default UsuarioFormAdd;
