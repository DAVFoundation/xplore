import { handleActions } from 'redux-actions';

const initialState = {
  title: 'Mining Status',
  action: 'getMiningStatus',
  class: 'mining-status',
  icon: 'mining-status.png',
  tag: 'miningStatus',
  value: '',
};

export default handleActions(
  {},
  initialState,
);

