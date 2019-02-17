import { createAction } from 'redux-actions';

import {
  getBlocks as getBlocksCall,
  getAccounts as getAccountsCall,
  getTransactions as getTransactionsCall,
  getLatestTransaction as getLatestTransactionCall,
  getEvents as getEventsCall,
  getLatestBlockNumber as getLatestBlockCall,
  getTransactionCount as getTransactionCountCall,
  getMiningStatus as getMiningStatusCall,
  getRpcServer as getRpcServerCall,
} from '../lib/blockchain';

export const getEvents = createAction('GET_EVENTS', getEventsCall);

export const getEventsFulfilled = createAction(
  'GET_EVENTS_FULFILLED',
  getEventsCall,
);

export const getBlocks = createAction('GET_BLOCKS', getBlocksCall);

export const getBlocksFulfilled = createAction('GET_BLOCKS_FULFILLED');

export const getAccounts = createAction('GET_ACCOUNTS', getAccountsCall);

export const getAccountsFulfilled = createAction('GET_ACCOUNTS_FULFILLED');

export const getTransactions = createAction(
  'GET_TRANSACTIONS',
  getTransactionsCall,
);

export const getTransactionsFulfilled = createAction(
  'GET_TRANSACTIONS_FULFILLED',
);

export const getLatestTransaction = createAction(
  'GET_LATEST_TRANSACTION',
  getLatestTransactionCall,
);

export const getLatestTransactionFulfilled = createAction(
  'GET_LATEST_TRANSACTION_FULFILLED',
);

export const submitSearchForm = createAction('SUBMIT_SEARCH_FORM');

export const getMiningStatus = createAction(
  'GET_MINING_STATUS',
  getMiningStatusCall,
);

export const getTransactionCount = createAction(
  'GET_TRANSACTION_COUNT',
  getTransactionCountCall,
);

export const getLatestBlockNumber = createAction(
  'GET_LATEST_BLOCK',
  getLatestBlockCall,
);

export const getLatestBlockFulfilled = createAction('GET_LATEST_BLOCK_FULFILLED');

export const getRpcServer = createAction('GET_RPC_SERVER', getRpcServerCall);
