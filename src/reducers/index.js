import { combineReducers } from 'redux';
import userReducer from './user';
import employeeReducer from './employee';
import vacationReducer from './vacation';


export default combineReducers({
  user: userReducer,
  employee: employeeReducer,
  vacation: vacationReducer,
});
