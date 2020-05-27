import React from 'react';
import PropTypes from 'prop-types';

function InfoDay(props) {
  const { sum, totalVacation } = props;
  const daysStyle = {
    container: {
      display: 'grid',
      gridTemplateColumns: '40% auto',
      alignItems: 'center',
      padding: '20px 0px',
    },
    title: {
      fontSize: '1rem',
      fontWeight: 'bold',
      marginTop: '10px',
      alignSelf: 'flex-start',
    },
    day: {
      fontSize: '2rem',
      fontWeight: 'bold',
      backgroundColor: 'grey',
      color: 'white',
      padding: '20px 0',
      marginRight: '20px',
      display: 'grid',
      gridTemplateColumns: 'auto 40%',
    },
    number: {
      textAlign: 'right',
      paddingRight: '1rem',
    },
    dateStr: {
      textAlign: 'left',
    },
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateRows: '50% 50%',
    backgroundColor: 'lightgrey',
    height: '100%',
    width: '100%',
  };

  return (
    <div>
      <div style={containerStyle}>

        <div style={daysStyle.container}>
          <div style={daysStyle.title}>
            사용일수
          </div>
          <div style={daysStyle.day}>
            <div style={daysStyle.number}>
              {Math.round((sum.approved + sum.complete) * 10) / 10}
            </div>
            <div style={daysStyle.dateStr}>
              일
            </div>
          </div>
        </div>

        <div style={daysStyle.container}>
          <div style={daysStyle.title}>
            남은일수
          </div>
          <div style={daysStyle.day}>
            <div style={daysStyle.number}>
              {Math.round((totalVacation - (sum.approved + sum.complete)) * 10) / 10}
            </div>
            <div style={daysStyle.dateStr}>
              일
            </div>
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
