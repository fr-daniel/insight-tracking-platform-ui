const INITIAL_STATE = {
  atividades: [],
  loading: false,
  error: null
};

export default function atividades (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ATIVIDADES_REQUEST':
      return { ...state, loading: true }
    case 'SET_ATIVIDADES_SUCCESS':
      return { ...state, atividades: action.payload.atividades, loading: false }
    case 'SET_ATIVIDADES_FAILURE':
      return { ...state, loading: false, error: action.payload.error }
    case 'ADD_ATIVIDADE_REQUEST':
      return { ...state, loading: true }
    case 'ADD_ATIVIDADE_SUCCESS':
      return { ...state, loading: true, atividades: [...state.atividades, action.payload.atividade] }
    case 'DELETE_ATIVIDADE_REQUEST':
      return { ...state, loading: true }
    case 'DELETE_ATIVIDADE_SUCCESS':
      const atividades = state.atividades.filter(atividade => atividade.id !== action.payload.id);
      return { ...state, loading: true, atividades }
    default:
      return state;
  }
}
