import { all, takeLatest } from 'redux-saga/effects';

import { setUsuarios, deleteUsuario } from './usuarios';

export default function* rootSaga () {
  yield all([
    takeLatest('SET_USUARIOS_REQUEST', setUsuarios),
    takeLatest('DELETE_USUARIO_REQUEST', deleteUsuario),
  ]);
}
