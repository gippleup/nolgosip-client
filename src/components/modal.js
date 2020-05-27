/* eslint-disable consistent-return */
const CHANGE = 'CHANGE';

export const addVacaiton = (vacation) => ({
  type: CHANGE,
  payload: vacation,
});

const initialState = ({
  vacations: {
    from: '',
    to: '',
    reason: '',
  },
});

export const vacationState = (state = initialState, action) => {
  const { vacation } = action.payload;
  if (action.type === CHANGE) {
    return {
      ...state,
      vacations: vacation,
    };
  }
};