import { handleActions } from 'redux-actions';
import { getAccountsFulfilled } from '../actions';

const defaultState = [];

export default handleActions(
  {
    [getAccountsFulfilled]: (state, { payload }) => {
      return payload;
    },
  },
  defaultState,
);
