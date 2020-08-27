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

export const deteleUsuarioRequest = (id) => {
  return ({
    type: 'DELETE_USUARIO_REQUEST',
    payload: { id }
  })
};

export const deteleUsuarioSuccess = (id) => ({
  type: 'DELETE_USUARIO_SUCCESS',
  payload: { id }
});
