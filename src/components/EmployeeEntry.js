import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { history as historyPropTypes } from 'history-prop-types';


const EmployeeEntry = (props) => {
  const { employee } = props;

  const updateAuthToManager = () => {
    const data = {
      type: 'setAuth',
      auth: 'manager',
      email: employee.email,
    };
    fetch('http://15.164.226.124:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.email === employee.email) {
          alert('권한이 변경되었습니다');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <button type="button" onClick={updateAuthToManager}>관리자지정</button>
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
  }).isRequired,
//   history: PropTypes.shape(historyPropTypes)
//   authDispatch: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
//   searchTarget: state.user.logged,
//   loggedUser: state.user.loggedUser,
});

const mapDispatchToProps = (dispatch) => ({
//   searchDispatch: (target) => dispatch(setEmployeeList(target)),
});


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEntry);
