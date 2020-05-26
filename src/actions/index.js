// 휴가 추가
export const ADD_VACATION = 'ADD_VACATION';

// 휴가 취소
export const DELETE_VACATION = 'DELETE_VACATION';

// 팀원 휴가 상태 변경
export const MODIFY_OTHER_VACATION = 'MODIFY_OTHER_VACATION';

// 내 휴가 상태 변경
export const MODIFY_MY_VACATION = 'MODIFY_MY_VACATION';

// 내 데이터 가져오기

export const GET_MY_DATA = 'GET_MY_DATA';

export const USER_LIST = 'USER_LIST';

export const getMyData = (myData) => {
  console.log(myData);
  return {
    type: GET_MY_DATA,
    myData,
  };
};

export const getUserList = (userList) => (
  {
    type: USER_LIST,
    userList,
  }
);


// 휴가 추가

export const addlModalVaction = (addVacation) => (
  {
    type: ADD_VACATION,
    addVacation,
  }
);

// 휴가 삭제

export const deleteVacation = (vacation) => (
  {
    type: DELETE_VACATION,
    vacation,
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


export const cancelVacation = (vacationId) => async (dispatch, getState) => {
  const cancel = await fetch('http://54.180.90.57:5000/vacation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: 'cancel',
      vacationId,
    }),
    credentials: 'include',
  }).then((res) => {
    if (res.status === 200) return res.json();
    return false;
  });

  console.log(cancel);
  if (!cancel) throw new Error('CANCEL FAILED');

  const getUpdatedData = await fetch('http://54.180.90.57:5000/vacation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: 'get',
      target: 'user',
      email: 'a',
      from: '2020-01-01',
      to: '2020-12-31',
    }),
    credentials: 'include',
  }).then((res) => {
    if (res.status === 200) return res.json();
    return false;
  }).catch((err) => {
    throw err;
  });

  console.log(vacationId);
  console.log(getUpdatedData);
  if (!getUpdatedData) throw new Error('UPDATE FAILED');

  dispatch(getMyData(getUpdatedData.vacations));
};
