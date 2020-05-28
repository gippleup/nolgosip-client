import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import UserInfo from './UserInfo';
import MyVacationList from './MyVacationList';

function Mypage(props) {
  const {
    dispatch,
    user,
    myVacations,
  } = props;

  const [dataReady, setDataReady] = useState(false);
  if (myVacations.userName && !dataReady) {
    setDataReady(true);
  }

  // This is just for test, deactivate when test is done.
  useEffect(() => {
    // if (!user.logged) {
    //   dispatch(actions.signIn('a', 'a'));
    // }
    if (user.logged) {
      dispatch(actions.userVacationStatus());
    }
  }, [user]);

  const renderWhenReady = (type) => {
    if (!dataReady) return <></>;
    const { filteredVacations } = myVacations;
    const { sum } = filteredVacations;
    if (type === 'info') {
      return <UserInfo vacationsSum={sum} loggedUser={user.loggedUser} />;
    }
    if (type === 'list') {
      return <MyVacationList vacations={filteredVacations} />;
    }
  };

  return (
    <div style={{ backgroundColor: 'grey', display: 'grid', padding: '5%' }}>
      {renderWhenReady('info')}
      <div className="dividingLine" />
      {renderWhenReady('list')}
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


Mypage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    logged: PropTypes.bool.isRequired,
    loggedUser: PropTypes.object.isRequired,
  }).isRequired,
  myVacations: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    filteredVacations: PropTypes.shape({
      approved: vacationArrShape,
      complete: vacationArrShape,
      declined: vacationArrShape,
      expired: vacationArrShape,
      waiting: vacationArrShape,
      sum: PropTypes.shape({
        complete: PropTypes.number.isRequired,
        approved: PropTypes.number.isRequired,
        waiting: PropTypes.number.isRequired,
        expired: PropTypes.number.isRequired,
        declined: PropTypes.number.isRequired,
      }),
    }),
    vacations: vacationArrShape,
  }),
};


Mypage.defaultProps = {
  myVacations: {},
};

const mapStateToProps = (state) => ({
  user: state.user,
  myVacations: state.vacationState.vacationState,
});

export default connect(mapStateToProps, null)(Mypage);
