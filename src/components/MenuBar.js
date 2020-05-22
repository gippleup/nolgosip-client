import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history as historyPropTypes } from 'history-prop-types';
import { withRouter } from 'react-router-dom';
import { setLogged, setUserData } from '../actions';
// import axios from 'axios';
import '../style/MenuBar.css';


const MenuBar = (props) => {
  let button = null;
  const { loggedUser, history, logoutDispatch } = props;

  const signOut = () => {
    fetch('http://15.164.226.124:5000/signout', {
      method: 'POST',
      credentials: 'include',
    })
      .then((res) => {
        if (res.status === 200) {
          logoutDispatch();
          history.push('/login');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loggedUser.auth === 'admin') {
    button = (
      <div>
        <button className="employeeManagerButton" type="button">사원관리</button>
        <button className="vacationManagerButton" type="button">휴가관리</button>
      </div>
    );
  } else if (loggedUser.auth === 'manager') {
    button = (
      <button className="vacationManagerButton" type="button">휴가관리</button>
    );
  }
  return (
    <div className="menuBar">
      <div className="menuBarLogo">LOGO</div>
      <button className="mainButton" type="button">메인화면</button>
      <button className="myPageButton" type="button">마이페이지</button>
      {button}
      <button className="signOutButton" type="button" onClick={() => { signOut(); }}>로그아웃</button>
    </div>
  );
};

MenuBar.propTypes = {
  loggedUser: PropTypes.shape({ auth: PropTypes.string }).isRequired,
  history: PropTypes.shape(historyPropTypes),
};

MenuBar.propTypes = {
  logoutDispatch: PropTypes.func.isRequired,
};

MenuBar.defaultProps = {
  history: [],
};

const mapStateToProps = (state) => ({
  loggedUser: state.user.loggedUser,
});

const mapDispatchToProps = (dispatch) => ({
  logoutDispatch: () => {
    dispatch(setLogged(false));
    dispatch(setUserData({
      auth: '',
      leftVacation: 0,
      email: '',
      mobile: '',
      name: '',
    }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuBar));
