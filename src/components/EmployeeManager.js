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

    this.state = {
      search: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.searchEmployee = this.searchEmployee.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  searchEmployee = () => {
    const { searchDispatch, employeeList } = this.props;
    const { search } = this.state;
    const searchTarget = [];
    for (let i = 0; i < employeeList.length; i += 1) {
      if (employeeList[i].name === search) {
        searchTarget.push(employeeList[i]);
      }
    }
    searchDispatch(searchTarget);
  }

  render() {
    const { employeeList } = this.props;
    return (
      <div className="EmployeeManager">
        <div className="searchTarget">
          <input className="searchTargetInput" type="text" placeholder="검색할 이름을 입력하세요" onChange={this.handleInputValue('search')} size="30" />
          <button type="button" onClick={this.searchEmployee}>검색</button>
        </div>
        {employeeList.map((employeeData) => (
          <EmployeeEntry employeeList={employeeList} employee={employeeData} key={employeeData.email} />))}
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
    auth: PropTypes.string,
  })).isRequired,
};

// EmployeeManager.defaultProps = {
//   history: [],
// };

const mapStateToProps = (state) => ({
  employeeList: state.employee.employeeList,
});

const mapDispatchToProps = (dispatch) => ({
  searchDispatch: (target) => dispatch(setEmployeeList(target)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmployeeManager));
