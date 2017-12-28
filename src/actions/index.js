import { createAction } from 'redux-actions';
import { getBlocks as getBlocksCall, getAccounts as getAccountsCall, getContractsByAddresses as getContractsByAddressesCall } from '../lib/blockchain';

export const getBlocks = createAction('GET_BLOCKS', getBlocksCall);

export const getBlocksFulfilled = createAction('GET_BLOCKS_FULFILLED');

export const getAccounts = createAction('GET_ACCOUNTS', getAccountsCall);

export const getAccountsFulfilled = createAction('GET_ACCOUNTS_FULFILLED');

export const getContractsByAddresses = createAction('GET_CONTRACTS_BY_ADDRESSES', getContractsByAddressesCall);

export const getContractsByAddressesFulfilled = createAction('GET_CONTRACTS_BY_ADDRESSES_FULFILLED');