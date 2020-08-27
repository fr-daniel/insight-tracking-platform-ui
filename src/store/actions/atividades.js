export const setAtividadesRequest = () => ({
  type: 'SET_ATIVIDADES_REQUEST',
});


export const setAtividadesSuccess = (atividades) => ({
  type: 'SET_ATIVIDADES_SUCCESS',
  payload: { atividades }
});

export const setAtividadesFailure = (error) => ({
  type: 'SET_ATIVIDADES_FAILURE',
  payload: { error }
});

export const addAtividadeRequest = (atividade) => ({
  type: 'ADD_ATIVIDADE_REQUEST',
  payload: { atividade }
});

export const addAtividadeSuccess = (atividade) => ({
  type: 'ADD_ATIVIDADE_SUCCESS',
  payload: { atividade }
});

export const deteleAtividadeRequest = (id) => ({
  type: 'DELETE_ATIVIDADE_REQUEST',
  payload: { id }
});

export const deteleAtividadeSuccess = (id) => ({
  type: 'DELETE_ATIVIDADE_SUCCESS',
  payload: { id }
});
