import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

function MyVacationList(props) {
  const { vacations, cancelVacation } = props;
  const {
    approved, complete, declined, expired, waiting, cancelled,
  } = vacations;
  const curConcern = approved.concat(waiting);
  const pastConcern = complete.concat(declined).concat(expired).concat(cancelled);

  const toSimpleDate = (fullDate) => {
    const date = new Date(fullDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
  };

  const statusText = {
    expired: '만료',
    waiting: '대기',
    approved: '승인',
    cancelled: '취소',
    complete: '잘쉼',
    declined: '거절',
  };

  const keyToTitle = {
    createdAt: '신청일',
    from: '시작일',
    to: '종료일',
    reason: '사유',
    span: '기간',
    status: '상태',
  };

  const keyToValue = (key, value) => {
    if (key === 'createdAt' || key === 'from' || key === 'to') return toSimpleDate(value);
    if (key === 'span') return `${Math.ceil(value * 10) / 10}일`;
    if (key === 'status') return statusText[value];
    return value;
  };

  const cancelButton = (vacationId) => (
    <div type="cancelButton" className="myVacationDesEle">
      <button type="button" onClick={() => { cancelVacation(vacationId); }}>
        취소
      </button>
    </div>
  );

  const vacationToDiv = (vacation) => {
    return Object.keys(vacation).map((key) => {
      const subTitle = keyToTitle[key];
      const value = keyToValue(key, vacation[key]);
      if (key === 'id' && vacation.status !== 'waiting') return <></>;
      if (key === 'id' && vacation.status === 'waiting') return cancelButton(vacation.id);
      return (
        <div className="myVacationDesEle">
          <div className="title">{subTitle}</div>
          <div className={`value ${key === 'status' ? vacation.status : ''}`}>{value}</div>
        </div>
      );
    });
  };

  const renderVacations = (data) => (
    <div className="myVacationList">
      {data.map((vacation, i) => (
        <div className="myVacationListEntry">
          {vacationToDiv(vacation)}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="myVacationListBox">
        <div className="myVacationListSubTitle">진행 중인 휴가</div>
        {renderVacations(curConcern)}
      </div>
      <div className="dividingLine" />
      <div className="myVacationListBox">
        <div className="myVacationListSubTitle">완료된 휴가</div>
        {renderVacations(pastConcern)}
      </div>
    </>
  );
}

const vacationArrShape = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  reason: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}));

MyVacationList.propTypes = {
  vacations: PropTypes.shape({
    approved: vacationArrShape,
    complete: vacationArrShape,
    declined: vacationArrShape,
    expired: vacationArrShape,
    waiting: vacationArrShape,
    cancelled: vacationArrShape,
    sum: PropTypes.shape({
      complete: PropTypes.number.isRequired,
      approved: PropTypes.number.isRequired,
      waiting: PropTypes.number.isRequired,
      expired: PropTypes.number.isRequired,
      declined: PropTypes.number.isRequired,
    }),
  }),
  cancelVacation: PropTypes.func.isRequired,
};

MyVacationList.defaultProps = {
  vacations: {},
};

export default connect(null, { ...actions })(MyVacationList);
