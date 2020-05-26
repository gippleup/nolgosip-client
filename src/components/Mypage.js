/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import {
  getMyData, getUserList, modifyMyVacation, deleteVacation, modifyOtherVaction, cancelVacation,
} from '../actions';


const axios = require('axios');

axios.defaults.withCredentials = true;

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.getUserVacation = this.getUserVacation.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getCurUserVacation = this.getCurUserVacation.bind(this);
    // this.cancleVacation = this.cancleVacation.bind(this);
    this.state = {
      getData: false,
    };
  }

  componentDidMount() {
    this.getUser();
    this.getCurUserVacation();
    this.getUserVacation();
  }

  // cancleVacation(vacationId) {
  //   this.props.cancel(vacationId)
  //   console.log('hi')
  // }

  // 유저 데이터 모두 가져오기
  getUser() {
    const { UserStoreVacation } = this.props;
    const url = 'http://54.180.90.57:5000/vacation';
    return axios.post(url, {
      type: 'get',
      target: 'user',
      email: 'a',
      from: '2020-01-01',
      to: '2020-12-31',
    }).then((res) => UserStoreVacation(res.data));
  }

  // 유저 리스트 데이터 가져오기
  getCurUserVacation() {
    const { userList } = this.props;
    const url = 'http://54.180.90.57:5000/users';
    return axios.get(url).then((res) => userList(res.data));
  }


  // 내 휴가 데이터 모두 가져오기
  getUserVacation() {
    const { myData } = this.props;
    return axios.post('http://54.180.90.57:5000/vacation', {
      type: 'get',
      target: 'user',
      email: 'a',
      from: '2020-01-01',
      to: '2020-12-31',
    }).then((res) => {
      myData(res.data.vacations);
    })
      .then(() => this.setState({
        getData: true,
      }));
  }

  ingtable() {
    const { vacations: { myData } } = this.props;
    const thead = ['신청일', '시작일', '종료일', '사용일수', '사유'].map((key, i) => <th key={i}>{key}</th>);
    const isAnyOf = (value, arr) => {
      for (let i = 0; i < arr.length; i += 1) {
        if (value === arr[i]) return true;
      }
      return false;
    };
    const targetKeys = ['createdAt', 'from', 'to', 'reason'];
    const tbody = Object.keys(myData[0])
      .filter((key) => isAnyOf(key, targetKeys))
      .map((key) => <td>{myData[0][key]}</td>);
    let { status } = myData[0];
    let btnText = status;

    return (
      <table className="tableIngVacation">
        <tr>
          {thead}
        </tr>
        <tr>
          {tbody}
          <td>
            <button type="button" value="휴가 취소" id="statusBtn" onClick={this.props.cancel.bind(null, myData[0].id)}>{btnText}</button>
          </td>
        </tr>
      </table>
    );
  }

  doneTable() {
    const { vacations: { myData } } = this.props;
    const thead = ['신청일', '시작일', '종료일', '사용 일수', '사유', '상태'].map((key, i) => <th key={i}>{key}</th>);
    const isAnyOf = (value, arr) => {
      for (let i = 0; i < arr.length; i += 1) {
        if (value === arr[i]) return true;
      }
      return false;
    };
    const targetKeys = ['createdAt', 'from', 'to', '여기에는 사용 일수 ', 'reason', 'status'];
    const tbody = myData.map((myVacation) => Object.keys(myVacation).filter((key) => isAnyOf(key, targetKeys)).map((key, i) => <td key={i}>{myVacation[key]}</td>));

    return (
      <table className="doneVacationTable">
        <tr>
          {thead}
        </tr>
        <tr>
          {tbody}
        </tr>
      </table>
    );
  }

  render() {
    const { getData } = this.state;
    const { vacations: { curUserEntries, myData } } = this.props;
    // console.log(curUserEntries);
    // console.log(myData);

    return (
      <div className="myPage">
        <div className="myData">
          <div className="name">
            이름
            {}
          </div>
          <div className="group">
            부서
            {}
          </div>
          <div className="email">
            이메일
          </div>
          <div className="mobile">
            전화번호
          </div>

          <div className="vacation">
            <div className="usedVacation">
              휴가 사용 일수
            </div>
            <div className="leftVacation">
              휴가 남은 일수
            </div>
          </div>

          <div className="myVacation">
            <div className="ingVacation">
              진행 중인 휴가
              {getData ? this.ingtable() : <></>}
            </div>
            <div className="doneVacation">
              완료 된 휴가
              {getData ? this.doneTable() : <></>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// 내 전체 데이터 가져오기


const mapStateToProps = (state) => ({
  vacations: state.vacaction,
});

const mapDispatchtoProps = (dispatch) => ({
  UserStoreVacation: (curUserEntries) => dispatch(modifyMyVacation(curUserEntries)),
  myData: (data) => dispatch(getMyData(data)),
  userList: (user) => dispatch(getUserList(user)),
  cancel: (vacationId) => dispatch(cancelVacation(vacationId)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(MyPage);
