const INITIAL_STATE = {
  open: true,
};

export default function drawer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return { ...state, open: true }
    case 'CLOSE_DRAWER':
      return { ...state, open: false }
    default:
      return state;
  }
}
