import { handleActions } from 'redux-actions';
import { getLatestTransactionFulfilled } from '../actions';

const initialState = {
  title: 'Transactions',
  action: 'getTransactionCount',
  class: 'transactions',
  icon: 'transactions.png',
  tag: 'transactions',
  value: '',
};

const updateState = (state, { payload }) => {
  let newState = { value: state.value };
  for (let key in payload) {
    if (key === 'ethValue') {
      const newkey = key.charAt(0).toUpperCase() + key.substr(1);
      newState.value += `${newkey}: ${payload[key]}
    `;
    }
    if (key === 'from') {
      const newkey = key.charAt(0).toUpperCase() + key.substr(1);
      newState.value += `${newkey}: ${payload[key].substring(0, 12)}...\
    `;
    }
  }
  return newState;
};

export default handleActions(
  {
    [getLatestTransactionFulfilled]: updateState,
  },
  initialState,
);

