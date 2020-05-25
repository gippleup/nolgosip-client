/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { TeamVactionEntry } from './TeamVactionEntry';
// import { fakeData } from '../fakeData';

export const TeamVacationList = ({ vacations: { otherEntries } }) => (
  // console.log(otherEntries)
  <div className="TeamVacitonList">
    <div className="otherEntries">
      {otherEntries.map((data, index) => (
        <TeamVactionEntry
          key={index}
          userName={data.userName}
          vacationFrom={data.from}
          vacationTo={data.to}
          vacationStatus={data.status}
        />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  vacations: state.vacactionReducer,
});

export default connect(mapStateToProps)(TeamVacationList);
