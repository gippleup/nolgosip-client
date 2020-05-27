import React from 'react';
import ReactModal from 'react-modal';
import '../style/ShowModal.css';
import { connect } from 'react-redux';
import * as actions from '../actions';

ReactModal.setAppElement('#root');

class ShowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      hasSubmit: false,
      from: '',
      to: '',
      reason: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  handleSubmit() {
    const from = document.querySelector('modalFrom');
    const to = document.querySelector('modalTo');
    const reason = document.querySelector('modalReason');
    this.setState({ handleSubmit: true });
    this.setState({
      from: from,
      to: to,
      reason: reason,
    });
  }

  // 모달 창 열기
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  // 모달 창 닫기
  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleOpenModal}>휴가신청</button>
        <ReactModal
          className="modal"
          isOpen={showModal}
        >
          <div>휴가 신청</div>
          <div className="modalVacationStart">
            시작일
            <select className="modalFrom">
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
            년

            <select className="modalFrom">
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

            <select className="modalFrom">
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
            <div className="modalVacationEnd">
              <div>
                종료일
                <select className="modalTo">
                  <option value="2020">2020</option>
                  <option value="2020">2021</option>
                  <option value="2020">2022</option>
                </select>
                년

                <select className="modalTo">
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

                <select className="modalTo">
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
              {' '}
              사유
              <select className="modalReason">
                <option> 병가 </option>
                <option> 개인 사정  </option>
                <option> 휴양 </option>
              </select>
              연도
            </div>
          </div>
          <button type="button" id="modal-button" onClick={this.handleCloseModal}>휴가 신청</button>
        </ReactModal>
      </div>
    );
  }
}


const mapDispatchtoProps = (dispatch) => ({
  addVacation: (curUserEntries) => dispatch((actions.modifyMyVacation(curUserEntries))),
});

export default connect(null, mapDispatchtoProps)(ShowModal);
