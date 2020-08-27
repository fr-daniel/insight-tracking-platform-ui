import { combineReducers } from "redux";

import usuarios from './usuarios';
import atividades from './atividades';
import drawer from './drawer';


export default combineReducers({
  usuarios,
  atividades,
  drawer
});
