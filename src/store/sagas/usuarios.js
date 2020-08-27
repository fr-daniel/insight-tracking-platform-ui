import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import {
  setUsuariosSuccess, setUsuariosFailure,
  deteleUsuarioSuccess,
  addUsuarioSuccess,
  atualizarUsuarioSuccess,
  addAtividadeCurriculoSuccess,
} from '../actions/usuarios';

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

export function* addUsuario (action) {
  try {
    const { data: usuario } = yield call(api.post, '/usuarios', action.payload.usuario);

    yield put(addUsuarioSuccess(usuario));
  } catch (err) {
    console.log(err);
  }
}

export function* atualizarUsuario (action) {
  try {
    const { data: usuario } = yield call(api.put, '/usuarios', action.payload.usuario);

    yield put(atualizarUsuarioSuccess(usuario));
  } catch (err) {
    console.log(err);
  }
}

export function* addAtividadeCurriculo (action) {
  const { usuarioId, atividade } = action.payload;
  try {
    const { data: usuario } = yield call(api.post, `atividades/add-curriculo/${usuarioId}`, atividade);

    yield put(addAtividadeCurriculoSuccess(usuario));
  } catch (err) {
    console.log(err);
  }
}
