import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
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
        {notApprovedVacationList.map((vacationData) => (
          <VacationEntry vacation={vacationData} key={vacationData.id} />))}
      </div>
      <div className="approvedVacations">
        {approvedVacationList.map((vacationData) => (
          <VacationEntry vacation={vacationData} key={vacationData.id} />))}
      </div>
    </div>
  );
};

VacationManager.propTypes = {
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

const mapStateToProps = (state) => ({
  vacationList: state.vacation.vacationList,
});

const mapDispatchToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VacationManager));
