import { combineReducers } from 'redux';
import accounts from './accounts';
import transactions from './transactions';
import blocks from './blocks';
import headerSections from './headerSections';
import events from './events';

export default combineReducers({
  accounts,
  transactions,
  blocks,
  headerSections,
  events,
});
