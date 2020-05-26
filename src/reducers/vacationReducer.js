import {
  MODIFY_MY_VACATION, MODIFY_OTHER_VACATION, GET_MY_DATA, USER_LIST, ADD_VACATION, DELETE_VACATION,
} from '../actions/index';

// 스토어 역할

const initialState = {
  otherEntries: [],
  curUserEntries: [],
  myData: [],
  userList: [],
};


// 팀원의 휴가 상태와 내 휴가 상태를 바꿔 주는 리듀서

export const vacationState = (state = initialState, action) => {
  console.log(action);
  if (action.type === MODIFY_MY_VACATION) {
    return {
      ...state,
      curUserEntries: {
        from: action.curUserEntries.vacations[0].from,
        to: action.curUserEntries.vacations[0].to,
        status: action.curUserEntries.vacations[0].status,
        userName: action.curUserEntries.userName,
      },
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
  if (action.type === USER_LIST) {
    return {
      ...state,
      userList: action.userList,
    };
  }
  return state;
};

export default vacationState;
