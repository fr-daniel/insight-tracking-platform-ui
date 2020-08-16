import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './style';
import api from '../../../services/api';

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'nome', label: 'Nome', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 100 },
  { id: 'telefone', label: 'Telefone', minWidth: 100 },
  { id: 'acoes', label: 'Ações', minWidth: 100, align: 'center', },
];

export default function UsuariosList () {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function loadData () {
      const { data } = await api.get(`usuarios`);
      console.log(data);
      setUsuarios(data);
    }

    loadData();
  }, [])

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleDeleteUsuario = (usuario) => {
    api.delete(`usuarios/${usuario.id}`).then(reponse => {
      setUsuarios(usuarios.filter(user => usuario.id !== user.id));
    });
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>

      <Typography variant="h6" gutterBottom>
        Usuários
      </Typography>
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
              {usuarios.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.telefone}</TableCell>

                    <TableCell align="center">
                      <Link to={`/usuarios/${row.id}/edit`}>
                        <Fab size="small" color="primary" aria-label="add" className={classes.margin}>
                          <EditIcon />
                        </Fab>
                      </Link>

                      <Fab size="small" color="secondary" aria-label="add"
                        className={classes.margin}
                        onClick={() => handleDeleteUsuario(row)}
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
          count={usuarios.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
