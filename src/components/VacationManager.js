import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { history as historyPropTypes } from 'history-prop-types';
// import { setEmployeeList } from '../actions';
import VacationEntry from './VacationEntry';


const VacationManager = (props) => {

//   searchEmployee = () => {
//     const { searchDispatch, employeeList } = this.props;
//     const { search } = this.state;
//     const searchTarget = [];
//     for (let i = 0; i < employeeList.length; i += 1) {
//       if (employeeList[i].name === search) {
//         searchTarget.push(employeeList[i]);
//       }
//     }
//     searchDispatch(searchTarget);
//   }

  const { vacationList } = props;
  const approvedVacationList = [];
  const notApprovedVacationList = [];
  for (let i = 0; i < vacationList.length; i += 1) {
    if (vacationList[i].status === 'approved') {
      approvedVacationList.push(vacationList[i]);
    } else {
      notApprovedVacationList.push(vacationList[i]);
    }
  }
  return (
    <div className="VacationManager">
      <div className="notApprovedVacations">
        {notApprovedVacationList.map((vacationData) => ( // 결재대기/결재완료 구분해서 컴포넌트 두개로 나눌건지?
          <VacationEntry vacation={vacationData} key={vacationData.userId} />))}
      </div>
      <div className="approvedVacations">
        {approvedVacationList.map((vacationData) => ( // 결재대기/결재완료 구분해서 컴포넌트 두개로 나눌건지?
          <VacationEntry vacation={vacationData} key={vacationData.userId} />))}
      </div>
    </div>
  );
};

VacationManager.propTypes = {
//   history: PropTypes.shape(historyPropTypes),
  vacationList: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
    status: PropTypes.string,
    userId: PropTypes.number, // ID?????? Email로 하는게 좋을듯
    approver: PropTypes.string,
    reason: PropTypes.string,
  })).isRequired,
};

// VacationManager.defaultProps = {
//   history: [],
// };

const mapStateToProps = (state) => ({
  VacationList: state.Vacation.VacationList,
});

const mapDispatchToProps = (dispatch) => ({
//   searchDispatch: (target) => dispatch(setVacationList(target)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VacationManager));
