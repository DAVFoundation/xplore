import { combineReducers } from 'redux';
import accounts from './accounts';
import blocks from './blocks';
import contracts from './contracts';

export default combineReducers({
  accounts,
  blocks,
  contracts
});
