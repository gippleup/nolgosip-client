import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../style/App.css';
import { Main } from './main'
// import Login from './Login';
// import SignUp from './SignUp';
// import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route path="/login" render={() => <Login logged={this.props.logged} />} />
          <Route
            exact
            path="/signUp"
            render={() => <SignUp logged={this.props.logged} />}
          /> */}
          <Route
            exact
            path="/main"
            render={() => <Main logged={this.props.logged} />}
          />
          <Route
            path="/"
            render={() => {
              if (this.props.logged) {
                return <Redirect to="/main" />;
              }
              return <Redirect to="/login" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => // state === 전체 스토어
  ({
    logged: state.logged,
  });
export default connect(mapStateToProps)(App);
