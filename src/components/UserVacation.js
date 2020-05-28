/* eslint-disable react/prop-types */
import React from 'react';
import '../style/Main.css';

const statusText = {
  expired: '만료',
  waiting: '대기',
  approved: '승인',
  cancelled: '취소',
  complete: '잘쉼',
  declined: '거절',
};


export const UserVaction = (props) => {
  const { userEntries } = props;

  return userEntries.map((entry) => {
    const { status } = entry;
    if (status === 'waiting' || status === 'approved') {
      return (
        <div className="userMain">
          <div className="userVactionEntry">
            <div className="vacationBox">
              <div className="userName">
                {entry.userName}
              </div>
              <div className={`VacationStatus ${entry.status}`}>
                {statusText[entry.status]}
              </div>
              <div className="vacationSpan">
                <div className="VacationFrom">
                  {new Date(entry.from).toISOString().substring(0, 10)}
                </div>
                <div className="VacationTo">
                  {new Date(entry.to).toISOString().substring(0, 10)}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <></>;
  });
};


export default UserVaction;
