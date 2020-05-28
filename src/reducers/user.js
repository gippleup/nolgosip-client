import { SET_LOGGED, SET_USERDATA } from '../actions/index';

const initialState = {
  logged: false,
  loggedUser: {
    auth: '',
    totalVacation: 0,
    email: '',
    mobile: '',
    name: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED:
      return {
        ...state,
        logged: action.logged,
      };
    case SET_USERDATA:
      return {
        ...state,
        loggedUser: {
          auth: action.userData.auth,
          leftVacation: action.userData.leftVacation,
          email: action.userData.email,
          mobile: action.userData.mobile,
          name: action.userData.name,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
