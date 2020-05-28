import {
  MODIFY_MY_VACATION, MODIFY_OTHER_VACATION, GET_MY_DATA, USER_LIST, SUM, ADD_VACATION, DELETE_VACATION,
} from '../actions/index';

// 스토어 역할

const initialState = {
  otherEntries: [],
  curUserEntries: [],
  myData: [],
  vacationState: [],
  addVacation: [],
};


// 팀원의 휴가 상태와 내 휴가 상태를 바꿔 주는 리듀서

export const vacationState = (state = initialState, action) => {
  if (action.type === MODIFY_MY_VACATION) {
    return {
      ...state,
      curUserEntries: action.curUserEntries,
    };
  }
  if (action.type === MODIFY_OTHER_VACATION) {
    return {
      ...state,
      otherEntries: action.otherEntries,
    };
  }
  if (action.type === GET_MY_DATA) {
    return {
      ...state,
      myData: action.myData,
    };
  }
  if (action.type === SUM) {
    return {
      ...state,
      vacationState: action.sum,
    };
  }
  if (action.type === ADD_VACATION) {
    return {
      ...state,
      addVacation: action.addVacation,
    };
  }
  return state;
};

export default vacationState;
