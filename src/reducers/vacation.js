import { SET_VACATIONLIST, SET_VACATIONAPPROVE } from '../actions/index';

const initialState = {
  vacationList: {
    groupName: '',
    vacations: [],
  },
};

const vacationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VACATIONLIST:
      return {
        ...state,
        vacationList: { ...action.vacationList },
      };
    case SET_VACATIONAPPROVE:
      return {
        ...state,
        vacationList: { ...action.approve },
      };
    default:
      return state;
  }
};

export default vacationReducer;
