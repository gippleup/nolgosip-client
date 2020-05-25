import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { history as historyPropTypes } from 'history-prop-types';
// import { setEmployeeList } from '../actions';
import VacationEntry from './VacationEntry';


const VacationManager = (props) => {
  const { vacationList } = props;
  const approvedVacationList = [];
  const notApprovedVacationList = [];
  for (let i = 0; i < vacationList.vacations.length; i += 1) {
    if (vacationList.vacations[i].status === 'approved') {
      approvedVacationList.push(vacationList.vacations[i]);
    } else {
      notApprovedVacationList.push(vacationList.vacations[i]);
    }
  }
  return (
    <div className="VacationManager">
      <div className="notApprovedVacations">
        {notApprovedVacationList.map((vacationData) => ( // 결재대기/결재완료 구분해서 컴포넌트 두개로 나눌건지?
          <VacationEntry vacation={vacationData} key={vacationData.email} />))}
      </div>
      <div className="approvedVacations">
        {approvedVacationList.map((vacationData) => ( // 결재대기/결재완료 구분해서 컴포넌트 두개로 나눌건지?
          <VacationEntry vacation={vacationData} key={vacationData.email} />))}
      </div>
    </div>
  );
};

VacationManager.propTypes = {
//   history: PropTypes.shape(historyPropTypes),
  vacationList: PropTypes.shape({
    groupName: PropTypes.string,
    vacations: PropTypes.arrayOf(PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string,
      status: PropTypes.string,
      email: PropTypes.string,
      approver: PropTypes.string,
      reason: PropTypes.string,
      createdAt: PropTypes.string,
      userName: PropTypes.string,
      id: PropTypes.number,
    })).isRequired,
  }).isRequired,
};

// VacationManager.defaultProps = {
//   history: [],
// };

const mapStateToProps = (state) => ({
  vacationList: state.vacation.vacationList,
});

const mapDispatchToProps = (dispatch) => ({
//   searchDispatch: (target) => dispatch(setVacationList(target)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VacationManager));
