import { createAction } from 'redux-actions';
import { getBlocks as getBlocksCall } from '../lib/blockchain';

export const getBlocks = createAction('GET_BLOCKS', getBlocksCall);

export const getBlocksFulfilled = createAction('GET_BLOCKS_FULFILLED');
