import React from 'react';
// import { connect } from 'react-redux';
// import { Switch, Route, Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  };

  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };

  render(){
      return(
    <div className="Login">
     <div>
       <img src="#" alt="" />
     </div>
     <div className="email">
       이메일 :
       <input className="emailInput" size="30" type="email" onChange={this.handleInputValue('email')} />
     </div>
     <div className="password">
       비밀번호 :
       <input className="passwordInput" size="30" type="password" onChange={this.handleInputValue('password')} />
     </div>
     <div className="loginButton">
       <button className="signinButton" type="submit">로그인</button>
       <button className="signinButton" type="button">회원가입</button>
     </div>
   </div>
   )
  }
};

export default Login;
// export default connect(mapStateToProps)(Login);
