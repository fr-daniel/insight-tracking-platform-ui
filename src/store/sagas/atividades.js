import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import {
  setAtividadesSuccess, setAtividadesFailure,
  addAtividadeSuccess,
  deteleAtividadeSuccess
} from '../actions/atividades';

export function* setAtividades (action) {
  try {
    const { data: atividades } = yield call(api.get, '/atividades');

    yield put(setAtividadesSuccess(atividades));
  } catch (err) {
    yield put(setAtividadesFailure('Erro: Atividades não localizadas'));
  }
}

export function* addAtividade (action) {
  try {
    const { data: atividade } = yield call(api.post, '/atividades', action.payload.atividade);

    yield put(addAtividadeSuccess(atividade));
  } catch (err) {
    console.log(err);
  }
}

export function* deleteAtividade (action) {
  try {
    const atividadeId = action.payload.id;
    yield call(api.delete, `/atividades/${atividadeId}`);

    yield put(deteleAtividadeSuccess(atividadeId));
  } catch (err) {
    console.log(err);
  }
}
