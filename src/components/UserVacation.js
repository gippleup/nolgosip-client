/* eslint-disable react/prop-types */
import React from 'react';
import '../style/Main.css';


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
              <div className="vacationSpan">
                <div className="VacationFrom">
                  {new Date(entry.from).toISOString().substring(0, 10)}
                </div>
                <div className="VacationTo">
                  {new Date(entry.to).toISOString().substring(0, 10)}
                </div>
              </div>
              <div className="VacationStatus">
                {entry.status}
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
