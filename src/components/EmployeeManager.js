import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { history as historyPropTypes } from 'history-prop-types';
import { setEmployeeList } from '../actions';
import EmployeeEntry from './EmployeeEntry';
// import fakeData from '../fakeData';


class EmployeeManager extends React.Component {
  constructor(props) {
    super(props);
    // const employeeList = this.props;
    // this.state = {
    // //   search: '',
    //   employeeList,
    // };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.searchEmployee = this.searchEmployee.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  searchEmployee = () => {
    const { searchDispatch } = this.props;
    searchDispatch();
  }

  render() {
    const { employeeList } = this.props;
    return (
      <div className="EmployeeManager">
        <div className="searchTarget">
          <input className="searchTargetInput" type="text" placeholder="검색할 이름을 입력하세요" size="30" />
        </div>
        {employeeList.employeeList.map((employeeData) => (
          <EmployeeEntry employee={employeeData} key={employeeData.email} />))}
      </div>
    );
  }
}

EmployeeManager.propTypes = {
//   history: PropTypes.shape(historyPropTypes),
  searchDispatch: PropTypes.func.isRequired,
  employeeList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    mobile: PropTypes.string,
    totalVacation: PropTypes.number,
  })).isRequired,
};

EmployeeManager.defaultProps = {
  history: [],
};

const mapStateToProps = (state) => ({
//   searchTarget: state.user.logged,
  employeeList: state.employee,
});

const mapDispatchToProps = (dispatch) => ({
  searchDispatch: (target) => dispatch(setEmployeeList(target)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmployeeManager));
