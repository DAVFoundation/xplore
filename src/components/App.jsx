import React, { Component } from 'react';
import store from '../store';
import BlocksContainer from '../containers/BlocksContainer.jsx';
import AccountsContainer from '../containers/AccountsContainer.jsx';
import { getBlocks, getAccounts } from '../actions';

class App extends Component {

  componentDidMount() {
    store.dispatch(getBlocks());
    store.dispatch(getAccounts());
  }

  render() {
    return (
      <div>
        <BlocksContainer />
        <AccountsContainer />
      </div>
    );
  }
}

export default App;


