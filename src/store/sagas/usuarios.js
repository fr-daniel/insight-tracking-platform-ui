import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { setUsuariosSuccess, setUsuariosFailure, deteleUsuarioSuccess } from '../actions/usuarios';

export function* setUsuarios (action) {
  try {
    const { data: usuarios } = yield call(api.get, '/usuarios');

    yield put(setUsuariosSuccess(usuarios));
  } catch (err) {
    yield put(setUsuariosFailure('Erro: Usuário não localizado'));
  }
}

export function* deleteUsuario (action) {
  try {
    const usuarioId = action.payload.id;
    yield call(api.delete, `/usuarios/${usuarioId}`);

    yield put(deteleUsuarioSuccess(usuarioId));
  } catch (err) {
    console.log(err);
  }
}
