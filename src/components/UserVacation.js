/* eslint-disable react/prop-types */
import React from 'react';
import '../style/Main.css';


export const UserVaction = (props) => {
  const { userEntries } = props;

  return userEntries.map((entry) => {
    const { status } = entry;
    if (status === 'waiting' || status === 'approved') {
      return (
        <div className="userVactionEntry">
          <div className="vacationInfo">휴가 정보</div>
          <div className="vacationBox">
            <div className="userName">
              {entry.userName}
            </div>
            <div className="VacationFrom">
              {entry.from}
            </div>
            <div className="VacationTo">
              {entry.to}
            </div>
            <div className="VacationStatus">
              {entry.status}
            </div>
          </div>
        </div>
      );
    }
    return <></>;
  });
};


export default UserVaction;
