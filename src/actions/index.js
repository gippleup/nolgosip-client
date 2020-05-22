// export const SET_USERNAME = 'SET_USERNAME';
// export const SET_DARK_MODE = 'SET_DARK_MODE';
// export const SET_CURRENT_VIDEO = 'SET_CURRENT_VIDEO';

// export const setUsername = name => ({
//   type: SET_USERNAME,
//   name
// });

// export const setDarkMode = value => ({
//   type: SET_DARK_MODE,
//   value
// });

// export const setCurrentVideo = video => ({
//   type: SET_CURRENT_VIDEO,
//   video
// });


// 휴가 추가 
export const ADD_VACATION = 'ADD_VACATION';

// 휴가 취소 
export const DELETE_VACATION = 'DELETE_VACATION';

// 팀원 휴가 상태 변경 
export const MODIFY_OTHER_VACATION = 'MODIFY_OTHER_VACATION'

// 내 휴가 상태 변경 
export const MODIFY_MY_VACATION = 'MODIFY_MY_VACATION'

// 휴가 추가 

export const addVaction = (addVaction) => (
  {
    type: ADD_VACATION,
    addVaction
  }
)

// 휴가 삭제 

export const deleteVacation = (deleteVacation) => (
  {
    type: DELETE_VACATION,
    deleteVacation
  }
)

// 내 휴가 상태 변경 
export const modifyMyVacation = (curUserEntries) => (
  {
    type : MODIFY_MY_VACATION,
    curUserEntries
  }
)


// 팀원 휴가 상태 변경 
export const modifyOtherVaction = (otherEntries) => (
  {
    type : MODIFY_OTHER_VACATION,
    otherEntries 
  }
)



