export const SET_LOGGED = 'SET_LOGGED';
export const SET_USERDATA = 'SET_USERDATA';

export const SET_EMPLOYEELIST = 'SET_EMPLOYEELIST';

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
