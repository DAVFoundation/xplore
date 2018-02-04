import { combineReducers } from 'redux';
import accounts from './accounts';
import transactions from './transactions';
import blocks from './blocks';
import topBlocks from './topBlocks';
import events from './events';

export default combineReducers({
  accounts,
  transactions,
  blocks,
  topBlocks,
  events
});
