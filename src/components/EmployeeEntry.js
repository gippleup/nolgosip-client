import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { history as historyPropTypes } from 'history-prop-types';


const EmployeeEntry = (props) => {
  const { employee } = props;
  return (
    <div className="EmployeeEntry">
      <div>{employee.name}</div>
      <div>
        {employee.email}
        {employee.mobile}
      </div>
      <div>{11 - employee.leftVacation}</div>
      <div>{employee.leftVacation}</div>
      <div>
        <button type="button">관리자지정</button>
      </div>
    </div>
  );
};
EmployeeEntry.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    mobile: PropTypes.string,
    leftVacation: PropTypes.number,
  }).isRequired,
//   history: PropTypes.shape(historyPropTypes)
//   searchDispatch: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
//   searchTarget: state.user.logged,
//   loggedUser: state.user.loggedUser,
});

const mapDispatchToProps = (dispatch) => ({
//   searchDispatch: (target) => dispatch(setEmployeeList(target)),
});


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEntry);
