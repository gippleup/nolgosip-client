// 휴가 추가
export const ADD_VACATION = 'ADD_VACATION';

// 휴가 취소
export const DELETE_VACATION = 'DELETE_VACATION';

// 팀원 휴가 상태 변경
export const MODIFY_OTHER_VACATION = 'MODIFY_OTHER_VACATION';

// 내 휴가 상태 변경
export const MODIFY_MY_VACATION = 'MODIFY_MY_VACATION';

// 휴가 추가

export const addlModalVaction = (addVacation) => (
  {
    type: ADD_VACATION,
    addVacation,
  }
);

// 휴가 삭제

export const deleteModalVacation = (deleteVacation) => (
  {
    type: DELETE_VACATION,
    deleteVacation,
  }
);

// 내 휴가 상태 변경

export const modifyMyVacation = (curUserEntries) => (
  {
    type: MODIFY_MY_VACATION,
    curUserEntries,
  }
);


// 팀원 휴가 상태 변경

export const modifyOtherVaction = (otherEntries) => (
  {
    type: MODIFY_OTHER_VACATION,
    otherEntries,
  }
);
