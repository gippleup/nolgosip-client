import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MenuBar = (props) => {
  console.log(props);
  let button = null;
  const { loggedUser } = props;
  if (loggedUser.auth === 'admin') {
    button = <button className="mainButton" type="button">메인화면</button> + <button className="vacationManager" type="button">휴가관리</button>;
  } else if (loggedUser.auth === 'manager') {
    button = <button className="vacationManager" type="button">휴가관리</button>;
  }
  return (
    <div className="menuBar">
      <button className="mainButton" type="button">메인화면</button>
      <button className="myPageButton" type="button">마이페이지</button>
      <button className="signOutButton" type="button">로그아웃</button>
      {button}
    </div>
  );
};

MenuBar.propTypes = {
  loggedUser: PropTypes.shape({ auth: PropTypes.string }).isRequired,
};

// App.defaultProps = {
//   auth: 'user',
// };

const mapStateToProps = (state) => ({
  loggedUser: state.user.loggedUser,
});

export default connect(mapStateToProps)(MenuBar);
