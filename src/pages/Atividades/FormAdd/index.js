import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import CustomSnackbar from '../../../components/CustomSnackbar';
import { addAtividadeRequest } from '../../../store/actions/atividades';
import useStyles from './style';

const atividadeDefault = {
  titulo: '',
  descricao: '',
  local: ''
}

const AtividadesFormAdd = () => {
  const classes = useStyles();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [atividade, setAtividade] = useState(atividadeDefault);
  const dispatch = useDispatch();

  const handleAddAtividade = () => {
    dispatch(addAtividadeRequest(atividade))
    setAtividade({ ...atividadeDefault })
    setOpenSnackbar(true);
  }

  return (
    <>
      <Paper className={classes.padding}>
        <Typography variant="h6" gutterBottom>
          Adicionar Atividade
      </Typography>

        <Grid item xs={12}>
          <TextField
            required
            value={atividade.titulo}
            onChange={(e) => setAtividade({ ...atividade, titulo: e.target.value })}
            label="Título"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            rows={5}
            label="Descrição"
            fullWidth
            autoComplete="given-name"
            value={atividade.descricao}
            onChange={(e) => setAtividade({ ...atividade, descricao: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Local"
            fullWidth
            autoComplete="family-name"
            value={atividade.local}
            onChange={(e) => setAtividade({ ...atividade, local: e.target.value })}
          />
        </Grid>

        <Grid item xs={12} className={classes.buttonMargin}>
          <Button variant="contained" color="primary" onClick={() => handleAddAtividade()}>Adicionar</Button>
        </Grid>
      </Paper>

      {openSnackbar && <CustomSnackbar message="Atividade Adicionada" severity="success" />}
    </>
  );
}

export default AtividadesFormAdd;
