import reducer from '../../src/reducers/accounts';

describe('Accounts reducer', () => {
  describe('When GET_ACCOUNTS_FULFILLED action is fired', () => {
    it('should return an array of accounts with their addresses and balances', () => {
      const state = [];
      const action = {
        type: 'GET_ACCOUNTS_FULFILLED',
        payload: [{ address: '0x080c96ed2700E238e3784B0B2B33e6B5f2CfD9e2', balance: '100' }]
      };
      expect(reducer(state, action)).toEqual([{ address: '0x080c96ed2700E238e3784B0B2B33e6B5f2CfD9e2', balance: '100' }]);
    });
  });
});
