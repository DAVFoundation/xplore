import reducer from '../../../src/reducers/topBlocks';

describe('Top Block reducer', () => {
  describe('When GET_RPC_SERVER action is fired', () => {
    it('should return an array of blocks objects', () => {
      const state = [];
      const action = {
        type: 'GET_TOP_BLOCKS',
        payload: 'getRpcServer'
      };
      expect(reducer(state, action)).toEqual([]);
    });
  });
});
