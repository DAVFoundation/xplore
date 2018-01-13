import { combineReducers } from 'redux';
import accounts from './accounts';
import blocks from './blocks';
import topBlocks from './topBlocks';

export default combineReducers({
  accounts,
  blocks,
  topBlocks
});
