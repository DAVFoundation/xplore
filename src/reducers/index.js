import { combineReducers } from 'redux';
import accounts from './accounts';
import transactions from './transactions';
import blocks from './blocks';
import headerSectionLastBlock from './headerSectionLastBlock';
import headerSectionMiningStatus from './headerSectionMiningStatus';
import headerSectionRPCServer from './headerSectionRPCServer';
import headerSectionTransactions from './headerSectionTransactions';
import events from './events';

export default combineReducers({
  accounts,
  transactions,
  blocks,
  headerSectionLastBlock,
  headerSectionTransactions,
  headerSectionRPCServer,
  headerSectionMiningStatus,
  events,
});
