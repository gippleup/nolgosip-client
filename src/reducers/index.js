import { combineReducers } from 'redux';
import userReducer from './user';
import employeeReducer from './Employee';


export default combineReducers({
  user: userReducer,
  employee: employeeReducer,
});
