import React from 'react';
import PropTypes from 'prop-types';

function InfoUser(props) {
  const { loggedUser } = props;

  const containerStyle = {
    height: '100%',
    marginRight: '5%',
    display: 'grid',
  };

  const cellStyle = (type) => {
    const basic = {
      textAlign: 'left',
      paddingLeft: '10px',
      paddingRight: '10px',
      alignSelf: 'center',
      backgroundColor: 'lightgrey',
      width: 'fit-content',
    };

    if (type !== 'title' && type !== 'value') return basic;

    const additional = {
      title: {
      },
      value: {
        fontWeight: 'bolder',
      },
    };

    return Object.assign(basic, additional[type]);
  };

  return (
    <div style={{ height: '80%', alignSelf: 'center' }}>
      <div style={containerStyle}>
        {Object.keys(loggedUser).map((key) => {
          let title = '';
          if (key === 'auth') title = '직책';
          if (key === 'email') title = '이메일';
          if (key === 'mobile') title = '전화번호';
          if (key === 'name') title = '존함';
          if (key === 'totalVacation') title = '총 휴가일';

          let value = loggedUser[key];
          if (loggedUser[key] === 'admin') value = '싸장님';
          if (loggedUser[key] === 'manager') value = '매뉘저님';
          if (loggedUser[key] === 'user') value = '푸로님';
          return (
            <div>
              <div style={{ width: 'fit-content', display:'flex', backgroundColor: 'lightgrey' }}>
                <div style={cellStyle('title')}>{title}</div>
                <div style={cellStyle('value')}>{value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


InfoUser.propTypes = {
  loggedUser: PropTypes.shape({
    auth: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    totalVacation: PropTypes.number.isRequired,
  }).isRequired,
};


export default InfoUser;
