import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setVacationApprove } from '../actions';
import '../style/VacationEntry.css';

const VacationEntry = (props) => {
  const { vacation, approveDispatch, vacationList } = props;
  let statusButton = '';
  const date = new Date();

  function vacationAction(e) {
    const buttonAction = e.target.value;
    let type = '';
    let approve = '';
    if (buttonAction === '승인') {
      type = 'approve';
      approve = 'approved';
    } else if (buttonAction === '취소') {
      type = 'revert';
      approve = 'waiting';
    } else if (buttonAction === '거절') {
      type = 'decline';
      approve = 'declined';
    } else if (buttonAction === '만료' || buttonAction === '완료') {
      return;
    }
    fetch('http://54.180.90.57:5000/vacation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type,
        vacationId: vacation.id,
      }),
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < vacationList.vacations.length; i += 1) {
          if (vacationList.vacations[i].id === vacation.id) {
            vacationList.vacations[i].status = approve;
          }
        }
        approveDispatch(vacationList);
        if (res.id === vacation.id) {
          alert('요청하신 내용이 처리되었습니다');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if ((vacation.status === 'approved' || vacation.status === 'declined') && Date.parse(vacation.from) >= date) {
    statusButton = '취소';
  } else if (vacation.status === 'complete') {
    statusButton = '완료';
  } else if (vacation.status === 'declined' && Date.parse(vacation.from) < date) {
    statusButton = '거절함';
  } else if (vacation.status === 'expired') {
    statusButton = '만료';
  }

  let button = null;
  if (vacation.status === 'approved' || vacation.status === 'expired' || vacation.status === 'declined') {
    if (Date.parse(vacation.from) >= date) {
      button = <button type="button" className="cancelButton" value={statusButton} onClick={vacationAction}>{statusButton}</button>;
    } else {
      button = <button type="button" className="completeButton" value={statusButton} onClick={vacationAction}>{statusButton}</button>;
    }
  } else {
    button = (
      <div className="buttonContainer">
        <button type="button" className="approveButton" value="승인" onClick={vacationAction}>승인</button>
        <button type="button" className="declineButton" value="거절" onClick={vacationAction}>거절</button>
      </div>
    );
  }

  return (
    <div className="VacationEntry">
      <div className="entryElements">{vacation.userName}</div>
      <div className="entryElements">{new Date(vacation.createdAt).toISOString().substring(0, 10)}</div>
      <div className="entryElements">{new Date(vacation.from).toISOString().substring(0, 10)}</div>
      <div className="entryElements">{new Date(vacation.to).toISOString().substring(0, 10)}</div>
      <div className="entryElements">
        {Math.floor(((Date.parse(vacation.to) - Date.parse(vacation.from)) / 1000 / 60 / 60 / 24))}
        일
      </div>
      <div className="entryElements">{vacation.reason}</div>
      <div className="entryElements">
        {button}
      </div>
    </div>
  );
};


VacationEntry.propTypes = {
  vacation: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
    status: PropTypes.string,
    email: PropTypes.string,
    approver: PropTypes.string,
    reason: PropTypes.string,
    createdAt: PropTypes.string,
    userName: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
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
  approveDispatch: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  vacationList: state.vacation.vacationList,
});

const mapDispatchToProps = (dispatch) => ({
  approveDispatch: (approve) => dispatch(setVacationApprove(approve)),
});


export default connect(mapStateToProps, mapDispatchToProps)(VacationEntry);
