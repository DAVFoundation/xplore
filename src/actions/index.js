import { createAction } from 'redux-actions';
import { getBlocks as getBlocksCall, getAccounts as getAccountsCall, getTransactions as getTransactionsCall } from '../lib/blockchain';

export const getBlocks = createAction('GET_BLOCKS', getBlocksCall);

export const getBlocksFulfilled = createAction('GET_BLOCKS_FULFILLED');

export const getAccounts = createAction('GET_ACCOUNTS', getAccountsCall);

export const getAccountsFulfilled = createAction('GET_ACCOUNTS_FULFILLED');

export const getTransactions = createAction('GET_TRANSACTIONS', getTransactionsCall);

export const getTransactionsFulfilled = createAction('GET_TRANSACTIONS_FULFILLED');

export const submitSearchForm = createAction('SUBMIT_SEARCH_FORM');
