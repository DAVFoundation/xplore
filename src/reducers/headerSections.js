import { handleActions } from 'redux-actions';
import { getRpcServer, getLatestTransactionFulfilled } from '../actions';
import { deepCopyState } from '../lib/utils';

const initialState = {
  sectionList: [
    {
      title: 'Last Block',
      action: 'getLatestBlockNumber',
      class: 'last-block',
      icon: 'last-block.png',
      tag: 'lastBlock',
      value: '',
    },
    {
      title: 'RPC Server',
      action: 'getRpcServer',
      class: 'rpc-server',
      icon: 'rpc-server.png',
      tag: 'rpcServer',
      value: getRpcServer().payload,
    },
    {
      title: 'Transactions',
      action: 'getTransactionCount',
      class: 'transactions',
      icon: 'transactions.png',
      tag: 'transactions',
      value: '',
    },
    {
      title: 'Mining Status',
      action: 'getMiningStatus',
      class: 'mining-status',
      icon: 'mining-status.png',
      tag: 'miningStatus',
      value: '',
    },
  ],
};

export default handleActions({
  [getLatestTransactionFulfilled]: (state, {payload}) => {
    const newState = deepCopyState(state);
    newState.sectionList.map((section) => {
      if (section.tag === 'transactions') {
        for (let key in payload) {
          if (key === 'ethValue' || key === 'from') {
            section.value += `${key}: ${payload[key]}
            `;
          }
        }
      }
    });
    return newState; 
  },
}, initialState);