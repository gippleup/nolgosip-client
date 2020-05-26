import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import { setLogged, setUserData } from '../actions';
import '../style/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  submit = () => {
    const {
      history,
      loggedDispatch,
      userDataDispatch,
    } = this.props;
    const {
      email,
      password,
    } = this.state;

    fetch('http://54.180.90.57:5000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: 'include',
    })
      .then((res) => {
        if (res.status === 404) {
          alert('등록된 계정이 없습니다');
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        loggedDispatch();
        userDataDispatch(res);
      })
      .then(() => history.push('/'))
      .catch((error) => {
        console.log(error);
      });
  }

  toSignUp = () => {
    const { history } = this.props;
    history.push('/signup');
  }

  render() {
    return (
      <div className="Login">
        <div className="loginLogo">
          Login
        </div>
        <div className="loginInputContainer">
          <div className="loginEmail">
            <input className="loginEmailInput" placeholder="Email" size="50" type="email" onChange={this.handleInputValue('email')} required />
          </div>
          <div className="loginPassword">
            <input className="loginPasswordInput" placeholder="Password" size="50" type="password" onChange={this.handleInputValue('password')} required />
          </div>
        </div>
        <div className="loginButton">
          <button className="signInSubmitButton" type="submit" onClick={this.submit}>로그인</button>
          <button className="signUpButton" type="button" onClick={this.toSignUp}>회원가입</button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape(historyPropTypes),
  loggedDispatch: PropTypes.func.isRequired,
  userDataDispatch: PropTypes.func.isRequired,
};

Login.defaultProps = {
  history: [],
};

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  loggedUser: state.user.loggedUser,
});

const mapDispatchToProps = (dispatch) => ({
  loggedDispatch: () => dispatch(setLogged(true)),
  userDataDispatch: (res) => dispatch(setUserData(res)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
