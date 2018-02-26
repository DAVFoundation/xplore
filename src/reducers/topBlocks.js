import { handleActions } from 'redux-actions';
import { getRpcServer, getLatestBlockFulfilled } from '../actions';

const initialState = {
  blockList: [
    {
      title: 'Last Block',
      action: 'getLatestBlock',
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

const deepCopyState = (state) => JSON.parse(JSON.stringify(state));

export default handleActions({
  [getLatestBlockFulfilled]: (state, {payload}) => {
    const newState = deepCopyState(state);
    newState.blockList.map((block) => {
      if (block.tag === 'lastBlock') block.value = payload.toString();
    });
    return newState; 
  },
}, initialState);