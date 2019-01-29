import { handleActions } from 'redux-actions';
import { getLatestBlockFulfilled } from '../actions';

const initialState = {
  title: 'Last Block',
  action: 'getLatestBlockNumber',
  class: 'last-block',
  icon: 'last-block.png',
  tag: 'lastBlock',
  value: '',
};

const updateState = (state, {payload}) => ({ value: payload.toString() });

export default handleActions(
  {
    [getLatestBlockFulfilled]: updateState,
  },
  initialState,
);

