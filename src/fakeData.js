const fakeData = [{
  logged: false,
  loggedUser: {
    auth: 'user',
    name: '김코딩',
    email: 'codingkim@example.com',
    mobile: '010-1234-1111',
    leftVacation: 11,
  },
  employeeList: [{
    auth: 'user',
    name: '박코딩',
    email: 'codingPARK@example.com',
    mobile: '010-1234-1111',
    leftVacation: 11,
  },
  {
    auth: 'user',
    name: '이코딩',
    email: 'codingLEE@example.com',
    mobile: '010-1234-1111',
    leftVacation: 11,
  },
  {
    auth: 'user',
    name: '최코딩',
    email: 'codingCHOI@example.com',
    mobile: '010-1234-1111',
    leftVacation: 11,
  },
  ],
  employeeVacationList: [],
  hasSubmit: false,
},
{
  logged: true,
  loggedUser: {
    auth: 'user',
    userName: '일반박사원',
    group: '',
    email: 'employeepark@example.com',
    mobile: '010-1234-2222',
    leftVacation: 20,
    usedVacation: 0,
    vacations: [],
  },
  employeeList: [],
  employeeVacationList: [],
  hasSubmit: false,
},
{
  logged: true,
  loggedUser: {
    auth: 'manager',
    userName: '중간김부장',
    group: '',
    email: 'bujangk@example.com',
    mobile: '010-1111-1234',
    leftVacation: 20,
    usedVacation: 0,
    vacations: [],
  },
  employeeList: [],
  employeeVacationList: [],
  hasSubmit: false,
},
{
  logged: true,
  loggedUser: {
    auth: 'admin',
    userName: '관리자',
    group: '',
    email: 'admin@example.com',
    mobile: '010-1234-2222',
    leftVacation: 20,
    usedVacation: 0,
    vacations: [],
  },
  employeeList: [],
  employeeVacationList: [],
  hasSubmit: false,
}];
export default fakeData;