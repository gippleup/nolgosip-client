/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { TeamVactionEntry } from './TeamVactionEntry';

export const TeamVacationList = (props) => {
  const { otherEntries } = props;
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

export default TeamVacationList;
