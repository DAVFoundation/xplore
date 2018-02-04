import { handleActions } from 'redux-actions';
import {getBlocksFulfilled, getEventsFulfilled} from '../actions';

const defaultState = [];

export default handleActions(
  {
    [getEventsFulfilled]: (state, { payload }) => {
      return payload;
    },
  },
  defaultState,
);
