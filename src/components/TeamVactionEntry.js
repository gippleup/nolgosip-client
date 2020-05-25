/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';


export const TeamVactionEntry = ({
  userName, vacationFrom, vacationTo, vacationStatus,
}) => (
  <div className="TeamVactionEntry">
    <div className="TeamUserName">
      {userName}
    </div>
    <div>
      <div className="TeamVacationFrom">
        {vacationFrom}
      </div>

      <div className="TeamVacationTo">
        {vacationTo}
      </div>
      <div className="TeamVacationStatus">
        {vacationStatus}
      </div>
    </div>
  </div>
);
// <div className="TeamVactaionStatus">
//   {vacationStatus}
// </div>

export default TeamVactionEntry;

// userName = {vacation.userName}
// vacationFrom = {vacation.vacationFrom}
// vacationTo = {vacation.vacationTo}
// vacationStatus = {vacation.vacationStatus}
