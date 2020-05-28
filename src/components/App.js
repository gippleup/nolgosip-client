import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../style/App.css';
import Login from './Login';
import SignUp from './SignUp';
import MenuBar from './MenuBar';
import EmployeeManager from './EmployeeManager';
import VacationManager from './VacationManager';
import Main from './main';
import MyPage from './Mypage/Mypage';

const App = (props) => (
  <div className="App">
    <Switch>
      <Route
        path="/login"
        render={() => (
          <div className="loginContainter">
            <div className="backgroundImage" alt="background" />
            <Login logged={props.logged} />
          </div>
        )}
      />
      <Route
        exact
        path="/signup"
        render={() => (
          <div className="singupContainer">
            <div className="backgroundImage" alt="background" />
            <SignUp />
          </div>
        )}
      />
      <Route
        exact
        path="/employeeManager"
        render={() => (
          <div>
            <MenuBar />
            <EmployeeManager />
          </div>
        )}
      />
      <Route
        exact
        path="/vacationManager"
        render={() => (
          <div>
            <MenuBar />
            <VacationManager />
          </div>
        )}
      />
      <Route
        exact
        path="/main"
        render={() => (
          <div>
            <MenuBar />
            <Main logged={props.logged} />
          </div>
        )}
      />
      <Route
        exact
        path="/mypage"
        render={() => (
          <div>
            <MenuBar />
            <MyPage logged={props.logged} />
          </div>
        )}
      />
      <Route
        path="/"
        render={() => {
          if (props.logged) {
            return (
              <div>
                <MenuBar />
                <Redirect to="/main" />
              </div>
            );
          }
          return <Redirect to="/login" />;
        }}
      />
    </Switch>
  </div>
);

App.propTypes = {
  logged: PropTypes.bool,
};

App.defaultProps = {
  logged: false,
};

// state === 전체 스토어
const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

export default connect(mapStateToProps)(App);
