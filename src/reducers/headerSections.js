import { handleActions } from 'redux-actions';
import { getRpcServer, getLatestTransactionFulfilled, getLatestBlockFulfilled} from '../actions';
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

export default handleActions(
  {
    [getLatestTransactionFulfilled]: (state, { payload }) => {
      const newState = deepCopyState(state);
      newState.sectionList.map(section => {
        if (section.tag === 'transactions') {
          for (let key in payload) {
            if (key === 'ethValue') {
              const newkey = key.charAt(0).toUpperCase() + key.substr(1);
              section.value += `${newkey}: ${payload[key]}
            `;
            }
            if (key === 'from') {
              const newkey = key.charAt(0).toUpperCase() + key.substr(1);
              section.value += `${newkey}: ${payload[key].substring(0, 12)}...\
            `;
            }
          }
        }
      });
      return newState;
    },
    [getLatestBlockFulfilled]: (state, {payload}) => {
      const newState = deepCopyState(state);
      newState.blockList.map((block) => {
        if (block.tag === 'lastBlock') block.value = payload.toString();
      });
      return newState; 
    },
  },
  initialState,
);

