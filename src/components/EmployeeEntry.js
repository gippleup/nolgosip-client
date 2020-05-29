import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import { setUserAuth } from '../actions';
import '../style/EmployeeEntry.css';


const EmployeeEntry = (props) => {
  const { employee, employeeList, history } = props;

  const updateAuth = () => {
    let auth = '';
    let confirmMsg = '';
    if (employee.auth === 'user') {
      auth = 'manager';
      confirmMsg = '관리자로 지정하시겠습니까?';
    } else if (employee.auth === 'manager') {
      auth = 'user';
      confirmMsg = '권한을 회수하시겠습니까?';
    }
    const data = {
      type: 'setAuth',
      auth,
      email: employee.email,
    };
    if (window.confirm(confirmMsg)) {
      fetch('http://54.180.90.57:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.email === employee.email) {
            alert('권한이 변경되었습니다');
          }
          for (let i = 0; i < employeeList.length; i += 1) {
            if (employeeList[i].email === employee.email) {
              employeeList[i].auth = auth;
            }
          }
          props.authDispatch(employeeList);
          history.push('./employeeManager');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  let button = null;
  if (employee.auth === 'user') {
    button = <button type="button" className="employeeEntryElements approveAuthButton" onClick={updateAuth}>관리자 지정</button>;
  } else if (employee.auth === 'manager') {
    button = <button type="button" className="employeeEntryElements cancelAuthButton" onClick={updateAuth}>권한취소</button>;
  }

  let employeeVacations = null;
  if (employee.vacations) {
    employeeVacations = (
      <>
        <div className="employeeEntryElements">
          {employee.vacations.sum.complete}
          일
        </div>
        <div className="employeeEntryElements">
          {employee.totalVacation - employee.vacations.sum.complete}
          일
        </div>
      </>
    );
  } else {
    employeeVacations = (
      <>
        <div className="employeeEntryElements">0일</div>
        <div className="employeeEntryElements">
          {employee.totalVacation}
          일
        </div>
      </>
    );
  }
  return (
    <div className="EmployeeEntry">
      <div className="employeeEntryElements">{employee.userName}</div>
      <div>
        {employee.email}
        /
        {employee.mobile}
      </div>
      {employeeVacations}
      <div className="employeeEntryElements">
        {button}
      </div>
    </div>
  );
};
EmployeeEntry.propTypes = {
  employee: PropTypes.shape({
    userName: PropTypes.string,
    email: PropTypes.string,
    mobile: PropTypes.string,
    totalVacation: PropTypes.number,
    auth: PropTypes.string,
    vacations: PropTypes.shape({
      sum: PropTypes.shape({
        complete: PropTypes.number,
        approved: PropTypes.number,
        waiting: PropTypes.number,
        expired: PropTypes.number,
      }),
    }),
  }).isRequired,
  employeeList: PropTypes.arrayOf(PropTypes.shape(
    {
      userName: PropTypes.string,
      email: PropTypes.string,
      mobile: PropTypes.string,
      totalVacation: PropTypes.number,
      auth: PropTypes.string,
    },
  )).isRequired,
  history: PropTypes.shape(historyPropTypes),
  authDispatch: PropTypes.func.isRequired,
};

EmployeeEntry.defaultProps = {
  history: [],
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  authDispatch: (auth) => dispatch(setUserAuth(auth)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmployeeEntry));
