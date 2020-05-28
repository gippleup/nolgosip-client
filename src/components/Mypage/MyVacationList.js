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
    const month = date.getMonth();
    const day = date.getDate();
    return `${year}.${month}.${day}`;
  };

  const cellStyle = (type = 'text') => {
    const basic = {
      borderRight: '1px solid black',
      borderBottom: '1px solid black',
      height: '2rem',
      padding: 0,
      display: 'flex',
      alignSelf: 'center',
      flexGrow: 1,
    };

    if (type !== 'text' && type !== 'button') return basic;

    const add = {
      text: {
        paddingLeft: '20px',
      },
      button: {
      },
    };

    return Object.assign(basic, add[type]);
  };

  const cell = (content, type = 'text', vacationId) => {
    let target;
    if (type === 'text') target = <div style={{ alignSelf: 'center' }}>{content}</div>;
    if (type === 'button') {
      target = (
        <button
          className="myPageRowButton"
          onClick={() => {
            cancelVacation(vacationId, 'filtered');
          }}
          type="button"
        >
          {content}
        </button>
      );
    }
    return (
      <div style={cellStyle(type)}>
        {target}
      </div>
    );
  };

  const renderVacations = (data) => data.map((vacation, i) => {
    const {
      createdAt, from, to, span, reason, status, id,
    } = vacation;
    let lastEle = cell('');
    if (status === 'waiting') lastEle = cell('취소', 'button', id);
    return (
      <div className="myVacationTable">
        {cell(i)}
        {cell(toSimpleDate(createdAt))}
        {cell(toSimpleDate(from))}
        {cell(toSimpleDate(to))}
        {cell(`${Math.round(span * 10) / 10}일`)}
        {cell(reason)}
        {lastEle}
      </div>
    );
  });

  const tableTitleStyle = {
    width: '100%',
    fontSize: '2rem',
    fontWeight: 'bolder',
    color: 'white',
    padding: '2rem 0',
  };

  const tableTitle = (title) => (
    <div style={tableTitleStyle}>
      {title}
    </div>
  );


  const headTitles = ['순번', '신청일', '시작일', '종료일', '사용일수', '사유', '비고'];
  const tableHead = (
    <div className="myVacationTable">
      {headTitles.map((title) => (<div className="myVacationTableHead">{title}</div>))}
    </div>
  );

  return (
    <div style={{
      display: 'grid', width: '100%', paddingBottom: '3rem', justifyContent: 'center',
    }}
    >
      {tableTitle('진행 중인 휴가')}
      <div>
        {tableHead}
        {renderVacations(curConcern)}
      </div>
      <div className="dividingLine" style={{ backgroundColor: 'darkgrey' }} />
      {tableTitle('완료된 휴가')}
      <div>
        {tableHead}
        {renderVacations(pastConcern)}
      </div>
    </div>
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
