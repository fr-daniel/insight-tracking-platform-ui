export const setUsuariosRequest = () => ({
  type: 'SET_USUARIOS_REQUEST',
});


export const setUsuariosSuccess = (usuarios) => ({
  type: 'SET_USUARIOS_SUCCESS',
  payload: { usuarios }
});

export const setUsuariosFailure = (error) => ({
  type: 'SET_USUARIO_FAILURE',
  payload: { error }
});

export const deteleUsuarioRequest = (id) => ({
  type: 'DELETE_USUARIO_REQUEST',
  payload: { id }
});

export const deteleUsuarioSuccess = (id) => ({
  type: 'DELETE_USUARIO_SUCCESS',
  payload: { id }
});

export const addUsuarioRequest = (usuario) => ({
  type: 'ADD_USUARIO_REQUEST',
  payload: { usuario }
});

export const addUsuarioSuccess = (usuario) => ({
  type: 'ADD_USUARIO_SUCCESS',
  payload: { usuario }
});

export const atualizarUsuarioRequest = (usuario) => ({
  type: 'ATUALIZAR_USUARIO_REQUEST',
  payload: { usuario }
});

export const atualizarUsuarioSuccess = (usuario) => ({
  type: 'ATUALIZAR_USUARIO_SUCCESS',
  payload: { usuario }
});

export const addAtividadeCurriculoRequest = (usuarioId, atividade) => ({
  type: 'ADD_ATIVIDADE_CURRICULO_REQUEST',
  payload: { usuarioId, atividade }
});

export const addAtividadeCurriculoSuccess = (usuario) => ({
  type: 'ADD_ATIVIDADE_CURRICULO_SUCCESS',
  payload: { usuario }
});


export const removeAtividadeCurriculoSuccess = (usuario) => ({
  type: 'REMOVE_ATIVIDADE_CURRICULO_SUCCESS',
  payload: { usuario }
});

export const removeAtividadeCurriculoRequest = (usuario) => ({
  type: 'REMOVE_ATIVIDADE_CURRICULO_REQUEST',
  payload: { usuario }
});
