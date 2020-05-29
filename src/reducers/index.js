import { combineReducers } from 'redux';
import userReducer from './user';
import employeeReducer from './employee';
import vacationReducer from './vacation';
import vacationState from './vacationReducer';


export default combineReducers({
  user: userReducer,
  employee: employeeReducer,
  vacation: vacationReducer,
  vacationState,
});
