/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import TeamVacationList from './TeamVactionList';
import UserVacation from './UserVacation';
import ShowModal from './ShowModal';
import * as actions from '../actions';
import '../style/Main.css';
// import '../style/TeamVacationList.css';

const axios = require('axios');

axios.defaults.withCredentials = true;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  // 메인 화면이 렌더 되면서 보여 준다.
  componentDidMount() {
    const { getTeamVacation } = this.props;
    getTeamVacation();
    // 메인 화면이 렌더되면서 데이터를 가져;다.
  }

  render() {
    const { curUserEntries, otherEntries } = this.props;
    if (!curUserEntries.length || !otherEntries.length) {
      return (
        <>
          <div className="vacationInfo">
            휴가 정보
          </div>
          <div className="mainUserName">
            이름
          </div>
          <div className="mainUserVacation">
            기간
          </div>
          <div className="userStatus">
            상태(휴가중/예정)
          </div>

          <div className="vacationInfo">
            휴가 정보
          </div>
          <div className="mainUserName">
            이름
          </div>
          <div className="mainUserVacation">
            기간
          </div>
          <div className="userStatus">
            상태(휴가중/예정)
          </div>
        </>
      );
    }
    return (
      <div className="main">
        <div className="mainGrid">
          <div className="mainName">
            내 휴가
          </div>
          <div className="userVacation">
            <div className="mainTitleList">
              <div className="mainTitle">
                이름
              </div>
              <div className="mainTitle">
                기간
              </div>
              <div className="mainTitle">
                상태
              </div>
            </div>
            <div className="userVacationList">
              <UserVacation userEntries={curUserEntries} />
            </div>
          </div>
          <div className="vacationName">우리 팀 휴가 상태</div>
          <div className="otherVaction">
            <div className="TeamVacationNameList">
              <div className="TeamVacationName">이름</div>
              <div className="TeamVacationName">기간</div>
              <div className="TeamVacationName">상태</div>
            </div>
            <div className="TeamVacationList">
              <TeamVacationList otherEntries={otherEntries} />
            </div>
          </div>
        </div>
        <div>
          <ShowModal />
        </div>
      </div>
    );
  }
}

// 사용자 유저의 스토어 상태를 바꿔준다.
// 팀 유저의 스토어 상태를 바꿔준다.

function mapDispatchtoProps(dispatch) {
  return {
    getTeamVacation: () => dispatch(actions.getTeamVacation()),
    setEmployeeList: (employeeList) => dispatch(actions.setEmployeeList(employeeList)),
  };
}

// 전체 스토어
const mapStateToProps = (state) => ({
  curUserEntries: state.vacationState.curUserEntries,
  otherEntries: state.vacationState.otherEntries,
});

export default connect(mapStateToProps, mapDispatchtoProps)(Main);
