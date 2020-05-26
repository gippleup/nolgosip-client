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
