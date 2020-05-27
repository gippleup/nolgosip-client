/* eslint-disable react/prop-types */

// 현재 진행 중인 userVacation 사용자 휴가 하나 만...
import React from 'react';

// console.log(fakeData[0].loggedUser.vacations[0].userName);


export const UserVaction = (props) => {
  const { userEntries } = props;

  return userEntries.map((entry) => {
    const { status } = entry;
    if (status === 'waiting' || status === 'approved') {
      return (
        <div className="userVactionEntry">
          <div className="userName">
            {entry.userName}
          </div>
          <div>
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
