/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { getMyData } from '../actions';

const axios = require('axios');

axios.defaults.withCredentials = true;

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.getUserVacation = this.getUserVacation.bind(this);
    this.state = {
      getData: false,
    };
  }

  componentDidMount() {
    this.getUserVacation();
  }

  // 내 데이터 모두 가져오기
  getUserVacation() {
    const { myData } = this.props;
    return axios.post('http://54.180.90.57:5000/vacation', {
      type: 'get',
      target: 'user',
      email: 'managerSong@gmail.com',
      from: '2020-01-01',
      to: '2020-12-31',
    }).then((res) => {
      console.log(res);
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
    return (
      <table className="tableIngVacation">
        <tr>
          {thead}
        </tr>
        <tr>
          {tbody}
          <td>
            <button id="statusBtn">휴가 취소</button>
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
    const targetKeys = ['createdAt', 'from', 'to', '여기에는 사용 일수 ', 'reason'];
    const tbody = myData.map((myVacation) => Object.keys(myVacation).filter((key) => isAnyOf(key, targetKeys)).map((key) => <td>{myData[0][key]}</td>));

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
    const { vacations: { myData, curUserEntries } } = this.props;
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
              {/* <table className="tableIngVacation"> */}

              {/* <tr>
                  <th>
                    순번
                  </th>
                  <th>
                    신청일
                  </th>
                  <th>
                    시작일
                  </th>
                  <th>
                    종료일
                  </th>
                  <th>
                    사용 일 수
                  </th>
                  <th>
                    사유
                  </th>
                  <th>
                    상태
                  </th>
                </tr>

                <tr>
                  <td>
                    하이
                  </td>
                  <td>
                    넌느
                  </td>
                  <td>
                    넌느
                  </td>
                  <td>
                    넌느
                  </td>
                  <td>
                    넌느
                  </td>
                  <td>
                    거절
                  </td>
                  <td>
                    거절
                  </td>
                </tr> */}
              {/* </table> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// 내 전체 데이터 가져오기


const mapStateToProps = (state) => ({
  vacations: state.vacactionReducer,
});

const mapDispatchtoProps = (dispatch) => ({
  myData: (data) => dispatch(getMyData(data)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(MyPage);
