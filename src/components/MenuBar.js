import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history as historyPropTypes } from 'history-prop-types';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';
import {
  setLogged, setUserData, setEmployeeList, setVacationList,
} from '../actions';
import '../style/MenuBar.css';
// import { fakeData } from '../fakeData';


const MenuBar = (props) => {
  let button = null;
  const { loggedUser, history, logoutDispatch } = props;

  const signOut = () => {
    fetch('http://54.180.90.57:5000/signout', {
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

  const toMain = () => {
    history.push('/main');
  };

  const toMypage = () => {
    history.push('/mypage');
  };

  const toEmployeeManager = () => {
    const { employeeListDispatch } = props;
    fetch('http://54.180.90.57:5000/users', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        employeeListDispatch(res);
      })
      .then(() => {
        history.push('/employeeManager');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toVacationManager = () => {
    const { vacationListDispatch } = props;
    fetch('http://54.180.90.57:5000/vacation', {
      method: 'POST',
      body: JSON.stringify({
        type: 'get',
        target: 'team',
        email: loggedUser.email,
        from: '2020-01-01',
        to: '2020-12-31',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        vacationListDispatch(res);
      })
      .then(() => {
        history.push('/vacationManager');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loggedUser.auth === 'admin') {
    button = (
      <div>
        <button className="employeeManagerButton" type="button" onClick={toEmployeeManager}>사원관리</button>
        <button className="vacationManagerButton" type="button" onClick={toVacationManager}>휴가관리</button>
      </div>
    );
  } else if (loggedUser.auth === 'manager') {
    button = (
      <button className="vacationManagerButton" type="button" onClick={toVacationManager}>휴가관리</button>
    );
  }
  return (
    <div className="menuBar">
      <div className="menuBarLogo">LOGO</div>
      <button className="mainButton" type="button" onClick={toMain}>메인화면</button>
      <button className="myPageButton" type="button" onClick={toMypage}>마이페이지</button>
      {button}
      <button className="signOutButton" type="button" onClick={() => { signOut(); }}>로그아웃</button>
    </div>
  );
};

MenuBar.propTypes = {
  loggedUser: PropTypes.shape({ auth: PropTypes.string, email: PropTypes.string }).isRequired,
  history: PropTypes.shape(historyPropTypes),
  logoutDispatch: PropTypes.func.isRequired,
  employeeListDispatch: PropTypes.func.isRequired,
  vacationListDispatch: PropTypes.func.isRequired,
};

MenuBar.defaultProps = {
  history: [],
};

const mapStateToProps = (state) => ({
  loggedUser: state.user.loggedUser,
});

const mapDispatchToProps = (dispatch) => ({
  employeeListDispatch: (employeeList) => dispatch(setEmployeeList(employeeList)),
  vacationListDispatch: (vacationList) => dispatch(setVacationList(vacationList)),
  logoutDispatch: () => {
    dispatch(setLogged(false));
    dispatch(setUserData({
      auth: '',
      totalVacation: 0,
      email: '',
      mobile: '',
      name: '',
    }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuBar));
