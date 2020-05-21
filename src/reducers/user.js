import { SET_LOGGED, SET_USERDATA } from '../actions/index';

const initialState = {
  logged: false,
  loggedUser: {
    auth: '',
    leftVacation: 0,
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
          auth: action.userData.data.auth,
          leftVacation: action.userData.data.leftVacation,
          email: action.userData.data.email,
          mobile: action.userData.data.mobile,
          name: action.userData.data.name,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
