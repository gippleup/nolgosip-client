import React from 'react';
import { connect } from 'react-redux';
import TeamVacationList from './TeamVactionList';
import UserVacation from './UserVacation';
import ShowModal from './ShowModal';
import { modifyMyVacation, modifyOtherVaction } from '../actions';

// import { signin, getUserVacation } from './Util';

const axios = require('axios');

axios.defaults.withCredentials = true;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowModal: false,
      logged: false,
      hasSubmit: false,
    };
    this.getTeamVacation = this.getTeamVacation.bind(this);
    this.getUserVacation = this.getUserVacation.bind(this);
    // this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  // 메인 화면이 렌더 되면서 보여 준다.
  componentDidMount() {
    // 메인 화면이 렌더되면서 데이터를 가져온다.
    this.signin().then(() => { this.getUserVacation(); }).then(() => { this.getTeamVacation(); });
  }

  // 임시적으로 가입
  signin() {
    return axios.post('http://54.180.90.57:5000/signin', {
      email: 'a',
      password: 'a',
    });
    // .then((res) => console.log(res.data));
  }

  // 팀 휴가 상태를 가져 오는 함수
  getTeamVacation() {
    const { TeamStoreVacation } = this.props;
    return axios.post('http://54.180.90.57:5000/vacation', {
      type: 'get',
      target: 'team',
      email: 'managerSong@gmail.com',
      from: '2020-01-01',
      to: '2020-12-31',
    }).then((res) => TeamStoreVacation(res.data.vacations));
  }

  // 내 휴가 상태를 가져 오는 함수
  getUserVacation() {
    const { UserStoreVacation } = this.props;
    const url = 'http://54.180.90.57:5000/vacation';
    return axios.post(url, {
      type: 'get',
      target: 'user',
      email: 'managerSong@gmail.com',
      from: '2020-01-01',
      to: '2020-12-31',
    }).then((res) => UserStoreVacation(res.data));
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <div className="userVacation">
          <UserVacation getUserVacation={this.getUserVacation} />
        </div>
        <div className="ohterVaction">
          <TeamVacationList getTeamVacation={this.getTeamVacation} />
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
    UserStoreVacation: (curUserEntries) => dispatch(modifyMyVacation(curUserEntries)),
    TeamStoreVacation: (otherEntries) => dispatch(modifyOtherVaction(otherEntries)),
  };
}

// 전체 스토어
const mapStateToProps = (state) => ({
  vacations: state.vacactionReducer,
});

export default connect(mapStateToProps, mapDispatchtoProps)(Main);
