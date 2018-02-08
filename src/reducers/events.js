import { handleActions } from 'redux-actions';
import {getEventsFulfilled} from '../actions';

const defaultState = [];

export default handleActions(
  {
    [getEventsFulfilled]: (state, { payload }) => payload,
  },
  defaultState,
);
