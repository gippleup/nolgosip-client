import React from 'react';
import PropTypes from 'prop-types';
import InfoUser from './InfoUser';
import InfoDay from './InfoDay';

function UserInfo(props) {
  const { vacationsSum, loggedUser } = props;

  return (
    <div className="myPageTopContainer">
      <InfoUser loggedUser={loggedUser} />
      <InfoDay totalVacation={loggedUser.totalVacation} sum={vacationsSum} />
    </div>
  );
}

UserInfo.propTypes = {
  loggedUser: PropTypes.shape({
    auth: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    totalVacation: PropTypes.number.isRequired,
  }).isRequired,
  vacationsSum: PropTypes.shape({
    complete: PropTypes.number.isRequired,
    approved: PropTypes.number.isRequired,
    waiting: PropTypes.number.isRequired,
    expired: PropTypes.number.isRequired,
    declined: PropTypes.number.isRequired,
  }),
};

UserInfo.defaultProps = {
  vacationsSum: {},
};


export default UserInfo;
