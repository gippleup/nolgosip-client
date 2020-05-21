import React from 'react';
import axios from 'axios';
import { setLogged, setUserData } from "../actions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.submit = this.submit.bind(this);
  };

  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };

  submit = () => {
    axios.post('http://13.125.27.141:5000/signin', {
          email: this.state.email,
          password: this.state.password
      })
      .then(res => {
        this.props.dispatch(setLogged(true));
        this.props.dispatch(setUserData(res));
      })
      .then(() => this.props.history.push('/'))
      .catch(error => {
        console.log(error);
      });
  }

  toSignUp = () => {
    this.props.history.push('/signup')
  }

  render(){
      return(
    <div className="Login">
     <div>
       <img src="#" alt="" />
     </div>
     <div className="email">
       이메일 :
       <input className="emailInput" size="30" type="email" onChange={this.handleInputValue('email')} required />
     </div>
     <div className="password">
       비밀번호 :
       <input className="passwordInput" size="30" type="password" onChange={this.handleInputValue('password')} required />
     </div>
     <div className="loginButton">
       <button className="signInSubmitButton" type="submit" onClick={this.submit}>로그인</button>
       <button className="signUpButton" type="button" onClick={this.toSignUp}>회원가입</button>
     </div>
   </div>
   )
  }
};

const mapStateToProps = state => {
    return {
      logged: state.user.logged,
      loggedUser: state.user.loggedUser,
    };
  };

export default connect(mapStateToProps)(withRouter(Login));
