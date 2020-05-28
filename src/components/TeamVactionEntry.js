/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import '../style/TeamVacationEntry.css';


export const TeamVactionEntry = ({
  userName, vacationFrom, vacationTo, vacationStatus,
}) => (
  <div className="TeamVactionEntry">
    <div className="TeamUserName">
      {userName}
    </div>
    <div>
      <div className="TeamVacationFrom">
        {new Date(vacationFrom).toISOString().substring(0, 10)}
      </div>

      <div className="TeamVacationTo">
        {new Date(vacationTo).toISOString().substring(0, 10)}
      </div>
      <div className="TeamVacationStatus">
        {vacationStatus}
      </div>
    </div>
  </div>
);

export default TeamVactionEntry;
