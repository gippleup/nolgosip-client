import { SET_EMPLOYEELIST, SET_USERAUTH } from '../actions/index';

const initialState = {
  employeeList: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEELIST:
      return {
        ...state,
        employeeList: action.employeeList,
      };
    case SET_USERAUTH:
      return {
        ...state,
        employeeList: action.auth,
      };
    default:
      return state;
  }
};

export default employeeReducer;
