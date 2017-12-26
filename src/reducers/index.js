import { combineReducers } from 'redux';
import accounts from './accounts';
import blocks from './blocks';

export default combineReducers({
  accounts,
  blocks,
});
