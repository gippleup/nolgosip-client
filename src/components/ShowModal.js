/* eslint-disable react/prop-types */
import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../actions';


const axios = require('axios');

ReactModal.setAppElement('#root');

class ShowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      fromYear: '2020',
      fromMonth: '1',
      fromDay: '1',
      toYear: '2020',
      toMonth: '1',
      toDay: '1',
      reason: '병가',
    };
  }

  postVacation = () => {
    const {
      fromYear, fromMonth, fromDay, toYear, toMonth, toDay, reason,
    } = this.state;
    const { getTeamVacation } = this.props;
    let from = '';
    let to = '';
    from = `${fromYear}-${fromMonth}-${fromDay}`;
    to = `${toYear}-${toMonth}-${toDay}`;
    axios.post('http://54.180.90.57:5000/vacation', {
      type: 'request',
      from,
      to,
      reason,
    }, { withCredentials: true })
      .then(() => {
        getTeamVacation();
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };


  handleClick = (e) => {
    e.preventDefault();
    this.handleCloseModal();
    this.postVacation();
  }

  // 모달 창 열기
  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  // 모달 창 닫기
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  year = () => {
    let year;
    for (let i = 2020; i < 2030; i = +1) {
      year = <option value={i}>{i}</option>;
    }
    return year;
  }

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <button type="button" id="mainBtn" onClick={this.handleOpenModal}>휴가신청</button>
        <ReactModal
          className="modal"
          isOpen={showModal}
        >
          <div className="modalMain">
            <div>휴가 신청</div>
            <div className="modalVacationStart">
              시작일
              <select className="modalFrom" onChange={this.handleInputValue('fromYear')}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
              년

              <select className="modalFrom" onChange={this.handleInputValue('fromMonth')}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              월

              <select className="modalFrom" onChange={this.handleInputValue('fromDay')}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              일
            </div>
            <div className="modalVacationEnd">
              <div>
                종료일
                <select className="modalTo" onChange={this.handleInputValue('toYear')}>
                  <option value="2020">2020</option>
                  <option value="2020">2021</option>
                  <option value="2020">2022</option>
                </select>
                년

                <select className="modalTo" onChange={this.handleInputValue('toMonth')}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                월

                <select className="modalTo" onChange={this.handleInputValue('toDay')}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                일
              </div>
            </div>

            <div className="modalReason">
              사유
              <select className="modalReason" onChange={this.handleInputValue('reason')}>
                <option> 병가 </option>
                <option> 개인 사정  </option>
                <option> 휴양 </option>
              </select>
            </div>
            <button type="button" id="modal-button" onClick={this.handleClick}>신청 완료</button>
            <button type="button" id="cancelBtn" onClick={this.handleCloseModal}>닫기</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  curUserVacation: state,
});

const mapDispatchtoProps = (dispatch) => ({
  getTeamVacation: () => dispatch(actions.getTeamVacation()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ShowModal);
