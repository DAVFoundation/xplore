import { getMiningStatus } from '../../../src/actions';

describe('getMiningStatus action', () => {
  it('should create an action to get transaction count', () => {
    const block = 1;
    const expectedAction = {
      type: 'GET_MINING_STATUS',
    };
    expect(getMiningStatus()).toEqual(expectedAction);
  });
});
