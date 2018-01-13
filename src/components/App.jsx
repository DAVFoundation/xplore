import React, { Component } from 'react';
import store from '../store';
import BlocksContainer from '../containers/BlocksContainer.jsx';
import AccountsContainer from '../containers/AccountsContainer.jsx';
import { getBlocks, getAccounts } from '../actions';
import './static/css/style.css';

class App extends Component {

  componentDidMount() {
    store.dispatch(getBlocks());
    store.dispatch(getAccounts());
  }

  render() {
    return (
      <div class="container xplorer">
        <BlocksContainer />
        <AccountsContainer />
      </div>
    );
  }
}

export default App;


