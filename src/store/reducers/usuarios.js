const INITIAL_STATE = {
  usuarios: [],
  loading: false,
  error: null
};

export default function usuarios (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USUARIOS_REQUEST':
      return { ...state, loading: true }
    case 'SET_USUARIOS_SUCCESS':
      return { ...state, usuarios: action.payload.usuarios, loading: false }
    case 'SET_USUARIOS_FAILURE':
      return { ...state, loading: false, error: action.payload.error }
    case 'DELETE_USUARIO_REQUEST':
      return { ...state, loading: true }
    case 'DELETE_USUARIO_SUCCESS':
      const usuarios = state.usuarios.filter(usuario => usuario.id !== action.payload.id);
      return { ...state, loading: true, usuarios }
    default:
      return state;
  }
}
