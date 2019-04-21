import { handleActions } from 'redux-actions';
import { getRpcServer } from '../actions';

const initialState = {
  title: 'RPC Server',
  action: 'getRpcServer',
  class: 'rpc-server',
  icon: 'rpc-server.png',
  tag: 'rpcServer',
  value: getRpcServer().payload,
};

export default handleActions({}, initialState);
