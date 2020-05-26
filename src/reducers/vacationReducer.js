import {
  MODIFY_MY_VACATION, MODIFY_OTHER_VACATION, GET_MY_DATA, USER_LIST,
} from '../actions/index';

// 스토어 역할

const initialState = {
  otherEntries: [],
  curUserEntries: [],
  myData: [],
  userList: [],
};


// 팀원의 휴가 상태와 내 휴가 상태를 바꿔 주는 리듀서

export const vacactionReducer = (state = initialState, action) => {
  switch (action.type) {
    // 내 휴가 상태를 새로운 상태로 바꾸어 준다.
    case MODIFY_MY_VACATION:
      return {
        ...state,
        curUserEntries: {
          from: action.curUserEntries.vacations[0].from,
          to: action.curUserEntries.vacations[0].to,
          status: action.curUserEntries.vacations[0].status,
          userName: action.curUserEntries.userName,
        },
      };
      // 팀원의 휴가를 새로운 상태로 바꾸어 준다.
    case MODIFY_OTHER_VACATION:
      return {
        ...state,
        otherEntries: action.otherEntries,
      };
    case GET_MY_DATA:
      // console.log(action);
      return {
        ...state,
        myData: action.myData,
      };
    case USER_LIST:
      return {
        ...state,
        userList: action.userList,
      };
    default:
      return state;
  }
};


export default vacactionReducer;
