import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../style/App.css';
import Login from './Login';
import Login from './SignUp';
import Login from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);

    state = {
      logged: false
    };
  }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" render={() => <Login logged={this.state.logged} />} />
          <Route
            exact
            path="/signUp"
            render={() => <Signup logged={this.state.logged} />}
          />
          <Route
            exact
            path="/main"
            render={() => <Main logged={this.state.logged}/>}
          />
          <Route
            path="/"
            render={() => {
              if (this.state.logged) {
                return <Redirect to="/main" />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logged: state.userReducer.logged
  };
};

export default connect(mapStateToProps)(App);
