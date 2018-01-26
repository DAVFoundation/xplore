import { handleActions } from 'redux-actions';
import { getTransactionsFulfilled } from '../actions';

const defaultState = [];

export default handleActions({
  [getTransactionsFulfilled]: (state, { payload }) => {
    return payload;
  }
},defaultState);
