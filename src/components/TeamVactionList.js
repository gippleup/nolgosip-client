/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { TeamVactionEntry } from './TeamVactionEntry';

export const TeamVacationList = ({ vacations: { otherEntries } }) => {
  console.log(otherEntries);
  const selectiveRender = () => {
    if (!otherEntries.length) {
      return (<></>);
    }
    return (
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
  };

  return selectiveRender();
};

// const mapStateToProps = (state) => ({
//   vacations: state,
// });
const mapStateToProps = (state) => ({
  vacations: state.vacationState,
});

export default connect(mapStateToProps)(TeamVacationList);
