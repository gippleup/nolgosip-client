/* eslint-disable react/prop-types */

// 현재 진행 중인 userVacation 사용자 휴가 하나 만...
import React from 'react';
import { connect } from 'react-redux';

// console.log(fakeData[0].loggedUser.vacations[0].userName);


export const UserVaction = ({ vacations: { curUserEntries } }) => (
  // console.log(curUserEntries)
  <div className="userVactionEntry">
    <div className="userName">
      {curUserEntries.userName}
    </div>
    <div>
      <div className="VacationFrom">
        {curUserEntries.from}
      </div>

      <div className="VacationTo">
        {curUserEntries.to}
      </div>
      <div className="VacationStatus">
        {curUserEntries.status}
      </div>
    </div>
  </div>
);


// 전체 상태
const mapStateToProps = (state) => ({
  vacations: state.vacactionReducer,
});

export default connect(mapStateToProps)(UserVaction);
