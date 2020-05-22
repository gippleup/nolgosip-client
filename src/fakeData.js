export const fakeData = [{
    logged: false,
    loggedUser: {
        auth: 'user',
        userName: '일반김코딩',
        group: '',
        email: 'codingkim@example.com',
        mobile: '010-1234-1111',
        leftVacation: 20,
        usedVacation: 0,
        vacations: [
            {
                "userName": "송팀장",
                "from": "2020-03-02",
                "to": "2020-03-05"
            },
        ]
    },
    "groupName": "백도어1팀",
 
    employeeList: [],
    employeeVacationList: [],
    hasSubmit: false,
},{
    logged: true,
    loggedUser: {
        auth: 'user',
        userName: '일반박사원',
        group: '',
        email: 'employeepark@example.com',
        mobile: '010-1234-2222',
        leftVacation: 20,
        usedVacation: 0,
        vacations: [
            {
                "userName": "일반박사원",
                "from": "2020-03-0233",
                "to": "2020-03-05"
            },
        ]
    },
    employeeList: [],
    employeeVacationList: [],
    hasSubmit: false,
},{
    logged: true,
    loggedUser: {
        auth: 'manager',
        userName: '중간김부장',
        group: '',
        email: 'bujangk@example.com',
        mobile: '010-1111-1234',
        leftVacation: 20,
        usedVacation: 0,
        vacations: []
    },
    employeeList: [],
    employeeVacationList: [],
    hasSubmit: false,
},{
    logged: true,
    loggedUser: {
        auth: 'admin',
        userName: '관리자',
        group: '',
        email: 'admin@example.com',
        mobile: '010-1234-2222',
        leftVacation: 20,
        usedVacation: 0,
        vacations: []
    },
    employeeList: [],
    employeeVacationList: [],
    hasSubmit: false,
}];

export default {fakeData}