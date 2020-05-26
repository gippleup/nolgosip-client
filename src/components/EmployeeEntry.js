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
    if (employee.auth === 'user') {
      auth = 'manager';
    } else if (employee.auth === 'manager') {
      auth = 'user';
    }
    const data = {
      type: 'setAuth',
      auth,
      email: employee.email,
    };
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
  };
  let button = null;
  if (employee.auth === 'user') {
    button = <button type="button" className="employeeEntryElements" onClick={updateAuth}>관리자지정</button>;
  } else if (employee.auth === 'manager') {
    button = <button type="button" className="employeeEntryElements" onClick={updateAuth}>권한취소</button>;
  }

  let employeeVacations = null;
  if (employee.vacations) {
    employeeVacations = (
      <>
        <div className="employeeEntryElements">{employee.vacations.sum.complete}</div>
        <div className="employeeEntryElements">{employee.totalVacation - employee.vacations.sum.complete}</div>
      </>
    );
  } else {
    employeeVacations = (
      <>
        <div className="employeeEntryElements">0</div>
        <div className="employeeEntryElements">{employee.totalVacation}</div>
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
