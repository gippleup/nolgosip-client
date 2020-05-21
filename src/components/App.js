import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../style/App.css';
import Login from './Login';
import SignUp from './SignUp';
import MenuBar from './MenuBar';
// import Main from './Main';

const App = (props) => (
  <div className="App">
    <Switch>
      <Route
        path="*"
        render={() => {
          if (props.logged) {
            return <MenuBar />;
          }
          return <div>NOT FOUND</div>;
        }}
      />
      <Route path="/login" render={() => <Login logged={props.logged} />} />
      <Route exact path="/signup" render={() => <SignUp />} />
      {/* <Route
        exact
        path="/main"
        render={() => <Main logged={props.logged}/>}
      /> */}
      <Route
        path="/"
        render={() => {
          if (props.logged) {
            return <div>main</div>;
            // return <Redirect to="/main" />;
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
const mapStateToProps = (state) => ({ logged: state.user.logged });

export default connect(mapStateToProps)(App);
