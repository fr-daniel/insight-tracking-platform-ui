import { combineReducers } from "redux";

import usuarios from './usuarios';
import drawer from './drawer';


export default combineReducers({
  usuarios,
  drawer
});
