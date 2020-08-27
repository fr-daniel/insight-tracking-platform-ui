import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import useStyles from './style';

import { setAtividadesRequest, deteleAtividadeRequest } from '../../../store/actions/atividades';

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'titulo', label: 'Título', minWidth: 100 },
  { id: 'descricao', label: 'Descrição', minWidth: 100 },
  { id: 'local', label: 'Local', minWidth: 100 },
  { id: 'acoes', label: 'Ações', minWidth: 100, align: 'center', },
];

export default function AtividadesList () {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { atividades } = useSelector(state => state.atividades);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAtividadesRequest())
  }, [dispatch])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Typography variant="h6" gutterBottom>Atividades</Typography>
        <Button variant="contained" color="primary" startIcon={<AddCircleIcon />} component={Link} to={"/atividades/add"}>Adicionar Atividade</Button>
      </Grid>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {atividades.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.titulo}</TableCell>
                    <TableCell>{row.descricao}</TableCell>
                    <TableCell>{row.local}</TableCell>

                    <TableCell align="center">
                      <Fab size="small" color="secondary" aria-label="add"
                        className={classes.margin}
                        onClick={() => dispatch(deteleAtividadeRequest(row.id))}
                      >
                        <DeleteIcon />
                      </Fab>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={atividades.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
