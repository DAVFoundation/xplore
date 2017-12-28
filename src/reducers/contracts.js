import { handleActions } from 'redux-actions';
import { getContractsByAddressesFulfilled } from '../actions';

const defaultState = [];

export default handleActions(
  {
    [getContractsByAddressesFulfilled]: (state, { payload }) => {
      return payload;
    },
  },
  defaultState,
);
