import { all, takeLatest } from 'redux-saga/effects';

import { setUsuarios, deleteUsuario, addUsuario, atualizarUsuario } from './usuarios';
import { setAtividades, addAtividade, deleteAtividade } from './atividades';

export default function* rootSaga () {
  yield all([
    takeLatest('SET_USUARIOS_REQUEST', setUsuarios),
    takeLatest('DELETE_USUARIO_REQUEST', deleteUsuario),
    takeLatest('ADD_USUARIO_REQUEST', addUsuario),
    takeLatest('ATUALIZAR_USUARIO_REQUEST', atualizarUsuario),
    takeLatest('SET_ATIVIDADES_REQUEST', setAtividades),
    takeLatest('ADD_ATIVIDADE_REQUEST', addAtividade),
    takeLatest('DELETE_ATIVIDADE_REQUEST', deleteAtividade),
  ]);
}
