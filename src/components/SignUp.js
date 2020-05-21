import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      password: '',
      mobile: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  submitSignUp = () => {
    const {
      email,
      password,
      name,
      mobile,
    } = this.state;
    axios.post('http://15.164.226.124:5000/signup', {
      email,
      password,
      name,
      mobile,
    })
      .then((res) => {
        const { history } = this.props;
        if (res.data === 'ok') {
          alert('회원가입이 완료되었습니다');
          history.push('/login');
        } else if (res.data === 'duplicate') {
          alert('이미 가입한 계정입니다');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
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
        <div className="name">
          이름 :
          <input className="nameInput" size="30" type="text" onChange={this.handleInputValue('name')} required />
        </div>
        <div className="mobile">
          전화번호 :
          <input className="mobileInput" size="30" type="mobile" onChange={this.handleInputValue('mobile')} required />
        </div>
        <div className="signUpButton">
          <button className="signUpSubmitButton" type="button" onClick={this.submitSignUp}>완료</button>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  history: PropTypes.shape(historyPropTypes),
};

SignUp.defaultProps = {
  history: [],
};

export default withRouter(SignUp);
// export default connect(mapStateToProps)(Login);
