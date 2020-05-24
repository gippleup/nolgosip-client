import { SET_EMPLOYEELIST } from '../actions/index';

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
    default:
      return state;
  }
};

export default employeeReducer;
