import React, { Component } from 'react';
import store from '../store';
import BlocksContainer from '../containers/BlocksContainer.jsx';
import AccountsContainer from '../containers/AccountsContainer.jsx';
import ContractsContainer from '../containers/ContractsContainer.jsx';
import { getBlocks, getAccounts, getContractsByAddresses } from '../actions';

class App extends Component {

  componentDidMount() {
    store.dispatch(getBlocks());
    store.dispatch(getAccounts());
    store.dispatch(getContractsByAddresses());
  }

  render() {
    return (
      <div>
        <BlocksContainer />
        <AccountsContainer />
        <ContractsContainer />
      </div>
    );
  }
}

export default App;


