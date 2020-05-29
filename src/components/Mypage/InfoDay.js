import React from 'react';
import PropTypes from 'prop-types';

function InfoDay(props) {
  const { sum, totalVacation } = props;

  return (
    <div id="myPageDayInfoContainer">

      <div className="myPageDayContainer">
        <div className="myPageDayTitle">
          사용일수
        </div>
        <div className="myPageDayDate">
          <div className="myPageDayNum">
            {(Math.round((sum.complete) * 10) / 10) + 1}
          </div>
          <div className="myPageDayLocale">
            일
          </div>
        </div>
      </div>

      <div className="myPageDayContainer">
        <div className="myPageDayTitle">
          남은일수
        </div>
        <div className="myPageDayDate">
          <div className="myPageDayNum">
            {Math.round((totalVacation - (sum.approved + sum.complete)) * 10) / 10}
          </div>
          <div className="myPageDayLocale">
            일
          </div>
        </div>
      </div>

    </div>
  );
}


InfoDay.propTypes = {
  sum: PropTypes.shape({
    complete: PropTypes.number.isRequired,
    approved: PropTypes.number.isRequired,
    waiting: PropTypes.number.isRequired,
    expired: PropTypes.number.isRequired,
    declined: PropTypes.number.isRequired,
  }),
  totalVacation: PropTypes.number.isRequired,
};

InfoDay.defaultProps = {
  sum: {},
};

export default InfoDay;
