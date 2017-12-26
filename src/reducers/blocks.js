import { handleActions } from 'redux-actions';
import { getBlocksFulfilled } from '../actions';

const defaultState = [];

export default handleActions(
  {
    [getBlocksFulfilled]: (state, { payload }) => {
      return payload;
    },
  },
  defaultState,
);
