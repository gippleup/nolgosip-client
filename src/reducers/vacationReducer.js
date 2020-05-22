import {  MODIFY_MY_VACATION, MODIFY_OTHER_VACATION } from "../actions/index";

// const initialState = {
//   currentUser: { name: "Guest" },
//   darkMode: false
// };


// 스토어 역할 

const initialState = {
   otherEntries:[],
   curUserEntries : []
}


// 팀원의 휴가 상태와 내 휴가 상태를 바꿔 주는 리듀서

export const vacactionReducer = (state = initialState, action) => {
    switch (action.type) {
      // 내 휴가 상태를 새로운 상태로 바꾸어 준다.
      case MODIFY_MY_VACATION:
        return Object.assign(...state, {
          curUserEntries : { 
            email : action.curUserEntries.email,
            from : action.curUserEntries.from,
            to : action.curUserEntries.to,
            status : action.curUserEntries.status
          }
        })
        // 팀원의 휴가를 새로운 상태로 바꾸어 준다.
      case MODIFY_OTHER_VACATION :
        return Object.assign(...state , {
          otherEntries: {
            email : action.otherEntries.email,
            from : action.otherEntries.from,
            to : action.otherEntries.to,
            status : action.otherEntries.status
          }
        })
      default:
        return state;
    }
  };


  export default {vacactionReducer}