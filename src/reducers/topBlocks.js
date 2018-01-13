import {handleActions} from 'redux-actions';

const initialState = {
  blockList: [
    {
      title:'Last Block',
      action:'getLatestBlock',
      class:'last-block',
      icon:'last-block.png'
    },
    {
      title:'RPC Server',
      action:'getRpcServer',
      class:'rpc-server',
      icon:'rpc-server.png'
    },
    {
      title:'Transactions',
      action:'getTransactionCount',
      class:'transactions',
      icon:'transactions.png'
    },
    {
      title:'Mining Status',
      action:'getMiningStatus',
      class:'mining-status',
      icon:'mining-status.png'
    }
  ]
};

export default handleActions({}, initialState);
