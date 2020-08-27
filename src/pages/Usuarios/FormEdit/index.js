import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import CustomSnackbar from '../../../components/CustomSnackbar';

import api from '../../../services/api';
import useStyles from './style';

import { atualizarUsuarioRequest, addAtividadeCurriculoRequest } from '../../../store/actions/usuarios';
import { setAtividadesRequest } from '../../../store/actions/atividades';


const UsuarioForm = (props) => {
  const classes = useStyles();

  const [usuario, setUsuario] = useState(props.location.state.usuarioEdit);
  const { atividades } = useSelector(state => state.atividades);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [addAtividade, setAddAtividade] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAtividadesRequest());
  }, [dispatch])

  const handleAtualizarUsuario = () => {
    dispatch(atualizarUsuarioRequest(usuario));
    setOpenSnackbar(true);
  };

  const handleAdicionarAtividadeCurriculo = () => {
    dispatch(addAtividadeCurriculoRequest(usuario.id, addAtividade))
  };

  const handleRemoverAtividadeCurriculo = (atividadeRemover) => {
    api.delete(`atividades/remover-curriculo/${usuario.id}`, { data: atividadeRemover }).then(response => {
      const atividadesAtualizadas = atividades.filter(atividade => atividade.id === response.id);
      setUsuario({ ...usuario, atividades: atividadesAtualizadas })
    }).catch(e => console.log(e));
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
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.titulo}</TableCell>
                      <TableCell align="right">{row.descricao}</TableCell>
                      <TableCell align="right">{row.local}</TableCell>
                      <TableCell align="right">
                        <Button color="secondary"
                          variant="contained"
                          size="small"
                          startIcon={<RemoveCircleIcon />}
                          onClick={() => handleRemoverAtividadeCurriculo(row)}>
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

      {openSnackbar && <CustomSnackbar message="Usuário Atualizado" severity="success" />}
    </>
  );
}

export default UsuarioForm;
