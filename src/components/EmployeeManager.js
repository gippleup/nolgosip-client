import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setEmployeeList } from '../actions';
import EmployeeEntry from './EmployeeEntry';
import '../style/EmployeeManager.css';


class EmployeeManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const { employeeList } = this.props;
    return (
      <div className="EmployeeManager">
        <div className="searchTarget">
          <input className="searchTargetInput" type="text" placeholder="검색할 이름을 입력하세요" onChange={this.handleInputValue('search')} size="30" />
        </div>
        <div className="employeeListTitleContainer">
          <div className="employeeListTitle">이름</div>
          <div className="employeeListTitle">이메일/전화번호</div>
          <div className="employeeListTitle">사용한 휴가</div>
          <div className="employeeListTitle">남은 휴가</div>
          <div className="employeeListTitle">권한</div>
        </div>
        <div className="employeeEntryListContainer">
          {employeeList.map((employeeData) => {
            const { search } = this.state;
            if (search) {
              if (search === employeeData.userName) {
                return <EmployeeEntry employeeList={employeeList} employee={employeeData} key={employeeData.email} />;
              }
            } else {
              return <EmployeeEntry employeeList={employeeList} employee={employeeData} key={employeeData.email} />;
            }
          })}
        </div>
      </div>
    );
  }
}

EmployeeManager.propTypes = {
  employeeList: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

const mapStateToProps = (state) => ({
  employeeList: state.employee.employeeList,
});

const mapDispatchToProps = (dispatch) => ({
  searchDispatch: (target) => dispatch(setEmployeeList(target)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmployeeManager));
