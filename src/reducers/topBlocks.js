import {handleActions} from 'redux-actions';

const initialState = {
  blockList: [
    {
      title:'Last Block',
      action:'getLatestBlock',
      class:'last-block',
      icon:'last-block.png',
      tag:'lastBlock'
    },
    {
      title:'RPC Server',
      action:'getRpcServer',
      class:'rpc-server',
      icon:'rpc-server.png',
      tag:'rpcServer'
    },
    {
      title:'Transactions',
      action:'getTransactionCount',
      class:'transactions',
      icon:'transactions.png',
      tag:'transactions'
    },
    {
      title:'Mining Status',
      action:'getMiningStatus',
      class:'mining-status',
      icon:'mining-status.png',
      tag:'miningStatus'
    }
  ]
};

export default handleActions({}, initialState);
