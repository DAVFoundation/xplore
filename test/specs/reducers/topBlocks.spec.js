import reducer from '../../../src/reducers/topBlocks';

describe('RPC server reducer', () => {
  describe('When GET_RPC_SERVER action is fired', () => {
    it('should return an array of blocks objects', () => {
      const state = [];
      const action = {
        type: 'GET_RPC_SERVER',
        payload: 'getRpcServer',
      };
      expect(reducer(state, action)).toEqual([]);
    });
  });
});
