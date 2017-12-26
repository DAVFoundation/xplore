import { handleActions } from 'redux-actions';

const defaultState = [{ id: 3, transactions: 4 }, { id: 2, transactions: 3 }, { id: 1, transactions: 1 }];

export default handleActions({}, defaultState);
