/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

const statusText = {
  expired: '만료',
  waiting: '대기',
  approved: '승인',
  cancelled: '취소',
  complete: '잘쉼',
  declined: '거절',
};


export const TeamVactionEntry = ({
  userName, vacationFrom, vacationTo, vacationStatus,
}) => (
  <div className="TeamVactionEntry">
    <div className="entryBox">
      <div className="TeamUserName">
        {userName}
      </div>
      <div className="TeamVacationData">
        <div className="TeamVacationFrom">
          {new Date(vacationFrom).toISOString().substring(0, 10)}
        </div>
        <div className="TeamVacationTo">
          {new Date(vacationTo).toISOString().substring(0, 10)}
        </div>
      </div>
      <div className={`TeamVacationStatus ${vacationStatus}`}>
        {statusText[vacationStatus]}
      </div>
    </div>
  </div>
);

export default TeamVactionEntry;
