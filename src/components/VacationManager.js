import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import VacationEntry from './VacationEntry';
import { setVacationList } from '../actions';
import '../style/VacationManager.css';


class VacationManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    // this.searchVacation = this.searchVacation.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  // handleInputValue = (key) => (e) => {
  //   this.setState({ [key]: e.target.value });
  // };

  // searchVacation = () => {
  //   const { searchDispatch, vacationList } = this.props;
  //   const { search } = this.state;
  //   const searchTarget = [];
  //   for (let i = 0; i < vacationList.vacations.length; i += 1) {
  //     if (vacationList.vacations[i].userName === search) {
  //       searchTarget.push(vacationList.vacations[i]);
  //     }
  //   }
  //   vacationList.vacations = searchTarget;
  //   searchDispatch(vacationList);
  // };


  render() {
    const { vacationList } = this.props;
    const { search } = this.state;
    const approvedVacationList = [];
    const notApprovedVacationList = [];
    for (let i = 0; i < vacationList.vacations.length; i += 1) {
      if (vacationList.vacations[i].status === 'waiting') {
        notApprovedVacationList.push(vacationList.vacations[i]);
      } else {
        approvedVacationList.push(vacationList.vacations[i]);
      }
    }
    return (
      <div className="VacationManager">
        <div className="searchTarget">
          <input className="searchTargetInput" type="text" placeholder="검색할 이름을 입력하세요" onChange={this.handleInputValue('search')} size="30" />
          {/* <button type="button" onClick={this.searchVacation}>검색</button> */}
        </div>
        <div className="notApprovedVacationContainer">
          <div className="notApprovedVacationListTitle">결재 대기중인 휴가</div>
          <div className="vacationTitleContainer">
            <div className="vacationTitle">이름</div>
            <div className="vacationTitle">신청일</div>
            <div className="vacationTitle">사작일</div>
            <div className="vacationTitle">종료일</div>
            <div className="vacationTitle">사용일수</div>
            <div className="vacationTitle">사유</div>
            <div className="vacationTitle">결재</div>
          </div>
          <div className="notApprovedVacations">
            {notApprovedVacationList.map((vacationData) => {
              if (search) {
                if (search === vacationData.userName) {
                  return <VacationEntry vacation={vacationData} key={vacationData.id} />;
                }
              } else {
                return <VacationEntry vacation={vacationData} key={vacationData.id} />;
              }
            })}
          </div>
        </div>
        <div className="approvedVacationContainer">
          <div className="approvedVacationListTitle">결재 완료된 휴가</div>
          <div className="vacationTitleContainer">
            <div className="vacationTitle">이름</div>
            <div className="vacationTitle">신청일</div>
            <div className="vacationTitle">사작일</div>
            <div className="vacationTitle">종료일</div>
            <div className="vacationTitle">사용일수</div>
            <div className="vacationTitle">사유</div>
            <div className="vacationTitle">결재</div>
          </div>
          <div className="approvedVacations">
            {approvedVacationList.map((vacationData) => {
              if (search) {
                if (search === vacationData.userName) {
                  return <VacationEntry vacation={vacationData} key={vacationData.id} />;
                }
              } else {
                return <VacationEntry vacation={vacationData} key={vacationData.id} />;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

VacationManager.propTypes = {
  // searchDispatch: PropTypes.func.isRequired,
  vacationList: PropTypes.shape({
    groupName: PropTypes.string,
    vacations: PropTypes.arrayOf(PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string,
      status: PropTypes.string,
      email: PropTypes.string,
      approver: PropTypes.string,
      reason: PropTypes.string,
      createdAt: PropTypes.string,
      userName: PropTypes.string,
      id: PropTypes.number,
    })).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  vacationList: state.vacation.vacationList,
});

const mapDispatchToProps = (dispatch) => ({
  searchDispatch: (target) => { dispatch(setVacationList(target)); },
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VacationManager));
