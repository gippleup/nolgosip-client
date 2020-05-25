import { SET_VACATIONLIST } from '../actions/index';

const initialState = {
  vacationList: [],
};

const vacationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VACATIONLIST:
      return {
        ...state,
        vacationList: action.vacationList,
      };
    default:
      return state;
  }
};

export default vacationReducer;
