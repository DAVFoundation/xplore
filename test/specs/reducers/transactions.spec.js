import reducer from '../../../src/reducers/transactions';

describe('Transactions reducer', () => {
  describe('When GET_TRANSACTIONS_FULFILLED action is fired', () => {
    it('should return an array of transactions with hash, from, to and blockNumber', () => {
      const state = [];
      const action = {
        type: 'GET_TRANSACTIONS_FULFILLED',
        payload: [
          {
            hash:
              '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
            from: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
            to: '0x6295ee1b4f6dd65047762f924ecd367c17eabf8f',
            blockNumber: '3',
          },
        ],
      };
      expect(reducer(state, action)).toEqual([
        {
          hash:
            '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
          from: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
          to: '0x6295ee1b4f6dd65047762f924ecd367c17eabf8f',
          blockNumber: '3',
        },
      ]);
    });
  });
});
