import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';


import api from '../../../services/api';

const usuarioDefault = {
  nome: '',
  email: '',
  telefone: '',
  atividades: []
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  padding: {
    padding: '10px',
    marginTop: '20px'
  }
});


const UsuarioForm = () => {
  const { params } = useRouteMatch();
  const [usuario, setUsuario] = useState(usuarioDefault);
  const [atividades, setAtividades] = useState([]);
  const [open, setOpen] = useState(false);
  const [addAtividade, setAddAtividade] = useState({});

  const classes = useStyles();

  useEffect(() => {
    async function loadData () {
      const [usuarioResponse, atividadesResponse] = await Promise.all([
        api.get(`/usuarios/${params.id}`),
        api.get(`/atividades`)
      ]);

      setUsuario(usuarioResponse.data);
      setAtividades(atividadesResponse.data);
    }


    loadData();
  }, [params])

  const handleAtualizarUsuario = () => {
    api.put(`usuarios`, usuario).then(response => {
      setOpen(true);
    });
  };

  const handleAdicionarAtividadeCurriculo = () => {
    api.post(`atividades/add-curriculo/${usuario.id}`, addAtividade).then(response => {
      console.log('add');
    }).catch(e => console.log(e));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway')
      return;

    setOpen(false);
  };

  return (
    <>
      <Paper className={classes.padding}>
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
        <Grid container spacing={6}>
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

      </Paper>
      <Paper className={classes.padding}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6" gutterBottom>
              Adicionar Atividade
      </Typography>
          </Grid>
          <Grid container item xs={12} direction="row" justify="flex-end" alignItems="center" >
            <Grid item xs={12} sm={10} >
              <Autocomplete
                id="combo-box-demo"
                options={atividades}
                getOptionLabel={(option) => option.titulo}
                onChange={(event, value) => setAddAtividade(value)}
                style={{ display: '100%', marginRight: '5px' }}
                renderInput={(params) => <TextField {...params} label="Atividade" variant="outlined" />}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button variant="contained" size="large" color="primary" onClick={() => handleAdicionarAtividadeCurriculo()}>Adicionar</Button>
            </Grid>
          </Grid>
        </Grid>

      </Paper>
      <Paper className={classes.padding}>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6" gutterBottom>
              Lista de Atividades
      </Typography>
          </Grid>
          <Grid container item xs={12} direction="row" justify="flex-start" alignItems="center" >

            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Título</TableCell>
                    <TableCell align="right">Descrição</TableCell>
                    <TableCell align="right">Local</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usuario.atividades.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.titulo}</TableCell>
                      <TableCell align="right">{row.descricao}</TableCell>
                      <TableCell align="right">{row.local}</TableCell>
                      <TableCell align="right">
                        <Button color="secondary" variant="contained" size="small" startIcon={<RemoveCircleIcon />}>
                          Remover
            </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Paper>

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
