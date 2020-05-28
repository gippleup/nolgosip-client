/* eslint-disable no-console */
const axios = require('axios').default;

axios.defaults.withCredentials = true;

// 휴가 상태 , 휴가 계산

export const SUM = 'SUM';

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

export const sumVacation = (sum) => (
  {
    type: SUM,
    sum,
  }
);

export const getMyData = (myData) => (
  {
    type: GET_MY_DATA,
    myData,
  }
);

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


export const SET_LOGGED = 'SET_LOGGED';
export const SET_USERDATA = 'SET_USERDATA';

export const SET_EMPLOYEELIST = 'SET_EMPLOYEELIST';
export const SET_USERAUTH = 'SET_USERAUTH';

export const SET_VACATIONLIST = 'SET_VACATIONLIST';
export const SET_VACATIONAPPROVE = 'SET_VACATIONAPPROVE';

export const setLogged = (logged) => ({
  type: SET_LOGGED,
  logged,
});

export const setUserData = (userData) => ({
  type: SET_USERDATA,
  userData,
});

export const setEmployeeList = (employeeList) => ({
  type: SET_EMPLOYEELIST,
  employeeList,
});

export const setUserAuth = (auth) => ({
  type: SET_USERAUTH,
  auth,
});

export const setVacationList = (vacationList) => ({
  type: SET_VACATIONLIST,
  vacationList,
});

export const setVacationApprove = (approve) => ({
  type: SET_VACATIONAPPROVE,
  approve,
});


export const getTeamVacation = () => (dispatch, getState) => {
  const loggedUserEmail = getState().user.loggedUser.email;
  axios.post('http://54.180.90.57:5000/vacation', {
    type: 'get',
    target: 'team',
    email: loggedUserEmail,
    from: '2020-01-01',
    to: '2023-12-31',
  })
    .then((res) => {
      const { vacations } = res.data;
      const myVacations = [];
      const othersVacations = [];
      vacations.forEach((vacation) => {
        if (vacation.email === loggedUserEmail) {
          myVacations.push(vacation);
        } else {
          othersVacations.push(vacation);
        }
      });
      dispatch(modifyOtherVaction(othersVacations));
      dispatch(modifyMyVacation(myVacations));
    })
    .catch((err) => {
      console.log(err);
      console.log(err.reponse);
    });
};

// 이거 질문
export const getUserVacation = () => (dispatch, getState) => {
  const loggedUserEmail = getState().user.loggedUser.email;
  axios.post('http://54.180.90.57:5000/signin', {
    email: loggedUserEmail,
  }).then((res) => {
    const { vacations } = res.data;
    dispatch(getMyData(vacations));
  });
};

export const userVacationStatus = () => (dispatch, getState) => {
  const loggedUserEmail = getState().user.loggedUser.email;
  fetch('http://54.180.90.57:5000/vacation', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(
      {
        type: 'get',
        target: 'user',
        email: loggedUserEmail,
        from: '2020-01-01',
        to: '2020-12-31',
      },
    ),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json())
    .then((json) => dispatch(sumVacation(json)))
    .then((err) => console.log(err));
};

// export const modalVacation = () => (dispatch) => {
//   dispatch(sumVacation());
// }
export const cancelVacation = (vacationId) => async (dispatch, getState) => {
  const loggedUserEmail = getState().user.loggedUser.email;
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

  if (!cancel) throw new Error('CANCEL FAILED');

  const getUpdatedData = await fetch('http://54.180.90.57:5000/vacation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: 'get',
      target: 'user',
      email: loggedUserEmail,
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

  if (!getUpdatedData) throw new Error('UPDATE FAILED');

  dispatch(userVacationStatus());
};


export const signIn = (email, password) => (dispatch) => {
  fetch('http://54.180.90.57:5000/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
    credentials: 'include',
  })
    .then((res) => {
      if (res.status === 404) {
        alert('등록된 계정이 없습니다');
      }
      return res.json();
    })
    .then((res) => {
      dispatch(setLogged(true));
      dispatch(setUserData(res));
    })
    .catch((error) => {
      console.log(error);
    });
};
