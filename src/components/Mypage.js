/* eslint-disable no-restricted-globals */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


const axios = require('axios');

axios.defaults.withCredentials = true;

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getData: true,
    };
  }

  componentDidMount() {
    const { userVacationStatus } = this.props;
    userVacationStatus();
  }

  ingTable() {
    const { vacations: { vacationState: { vacationState: { filteredVacations } } } } = this.props;
    const createdAt = [];
    filteredVacations.waiting.map((vacation) => createdAt.push(vacation.createdAt));

    const from = [];
    filteredVacations.waiting.map((vacation) => from.push(vacation.from));

    const to = [];
    filteredVacations.waiting.map((vacation) => to.push(vacation.to));

    const span = [];
    filteredVacations.waiting.map((vacation) => span.push(vacation.span));

    const reason = [];
    filteredVacations.waiting.map((vacation) => reason.push(vacation.reason));

    return (
      <thead>
        <tr>
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
            {}
          </th>
        </tr>
        <tr>
          <td>{createdAt.map((key) => key)}</td>
          <td>{from.map((key) => key)}</td>
          <td>{to.map((key) => key)}</td>
          <td>{span.map((key) => key)}</td>
          <td>{reason.map((key) => key)}</td>
          <td><button type="button">휴가 취소</button></td>
        </tr>
      </thead>
    );
  }

  doneTable() {
    const { vacations: { vacationState: { vacationState: { filteredVacations } } } } = this.props;


    const createdAt = [];
    filteredVacations.expired.map((vacation) => createdAt.push(vacation.createdAt));
    filteredVacations.declined.map((vacation) => createdAt.push(vacation.createdAt));
    // filteredVacations.comlete.map((vacation) => createdAt.push(vacation.createdAt));

    const from = [];
    filteredVacations.expired.map((vacation) => from.push(vacation.from));
    filteredVacations.declined.map((vacation) => from.push(vacation.createdAt));
    // filteredVacations.comlete.map((vacation) => createdAt.push(vacation.createdAt));

    const to = [];
    filteredVacations.expired.map((vacation) => to.push(vacation.to));
    filteredVacations.declined.map((vacation) => to.push(vacation.createdAt));
    // filteredVacations.comlete.map((vacation) => createdAt.push(vacation.createdAt));

    const span = [];
    filteredVacations.expired.map((vacation) => span.push(vacation.span));
    filteredVacations.declined.map((vacation) => span.push(vacation.createdAt));
    // filteredVacations.comlete.map((vacation) => createdAt.push(vacation.createdAt));

    const reason = [];
    filteredVacations.expired.map((vacation) => reason.push(vacation.reason));
    filteredVacations.declined.map((vacation) => reason.push(vacation.createdAt));
    // filteredVacations.comlete.map((vacation) => createdAt.push(vacation.createdAt));


    return (
      <thead>
        <tr>
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
        </tr>
        <tr>
          <td>{createdAt.map((key) => key)}</td>
          <td>{from.map((key) => key)}</td>
          <td>{to.map((key) => key)}</td>
          <td>{span.map((key) => key)}</td>
          <td>{reason.map((key) => key)}</td>
        </tr>
      </thead>
    );
  }

  render() {
    const { getData } = this.state;
    const { vacations: { vacationState: { curUserEntries } } } = this.props;
    const { vacations: { vacationState: { vacationState: { filteredVacations } } } } = this.props;
    console.log(filteredVacations);

    if (!curUserEntries.length || typeof filteredVacations === 'undefined') {
      return (
        <div className="myPage">
          <div className="myData">
            <div className="name">
              이름
              {}
            </div>
            <div className="email">
              이메일
              {}
            </div>
            <div className="mobile">
              전화번호
              {}
            </div>
            <div className="status">
              직책
              {}
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

              </div>
              <div className="doneVacation">
                완료 된 휴가
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="myPage">
        <div className="myData">
          <div className="name">
            이름
            {curUserEntries[0].userName}
          </div>
          <div className="email">
            이메일
            {curUserEntries[0].email}
          </div>
          <div className="mobile">
            전화번호
            {curUserEntries[0].mobile}
          </div>

          <div className="status">
            직책
            {curUserEntries[0].auth}
          </div>

          <div className="vacation">
            <div className="usedVacation">
              휴가 사용 일수
              { filteredVacations.sum.complete + filteredVacations.sum.approved }
            </div>
            <div className="leftVacation">
              휴가 남은 일수
              { 11 - (filteredVacations.sum.complete + filteredVacations.sum.approved) }
            </div>
          </div>

          <div className="myVacation">
            <div className="ingVacation">
              진행 중인 휴가
              <table>
                {getData ? this.ingTable() : <></>}
              </table>
            </div>
            <div className="doneVacation">
              완료 된 휴가
              {getData ? this.doneTable() : <></>}
              <table />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  vacations: state,
});

const mapDispatchtoProps = (dispatch) => ({
  UserStoreVacation: (curUserEntries) => dispatch(actions.modifyMyVacation(curUserEntries)),
  myData: (data) => dispatch(actions.getMyData(data)),
  getUserVacation: () => dispatch(actions.getUserVacation()),
  cancel: (vacationId) => dispatch(actions.cancelVacation(vacationId)),
  userVacationStatus: () => dispatch(actions.userVacationStatus()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(MyPage);
