import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import { setUserAuth } from '../actions';


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
    fetch('http://15.164.226.124:5000/users', {
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
    button = <button type="button" onClick={updateAuth}>관리자지정</button>;
  } else if (employee.auth === 'manager') {
    button = <button type="button" onClick={updateAuth}>권한취소</button>;
  }
  return (
    <div className="EmployeeEntry">
      <div>{employee.name}</div>
      <div>
        {employee.email}
        {employee.mobile}
      </div>
      <div>{11 - employee.totalVacation}</div>
      <div>{employee.totalVacation}</div>
      <div>
        {button}
      </div>
    </div>
  );
};
EmployeeEntry.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    mobile: PropTypes.string,
    totalVacation: PropTypes.number,
    auth: PropTypes.string,
  }).isRequired,
  employeeList: PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string,
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
//   searchTarget: state.user.logged,
//   loggedUser: state.user.loggedUser,
});

const mapDispatchToProps = (dispatch) => ({
  authDispatch: (auth) => dispatch(setUserAuth(auth)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmployeeEntry));
