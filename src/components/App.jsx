import React, { Component } from 'react';
import store from '../store';
import BlocksContainer from '../containers/BlocksContainer.jsx';
import AccountsContainer from '../containers/AccountsContainer.jsx';
import SearchFormContainer from '../containers/SearchFormContainer.jsx';
import TopBlocksContainer from '../containers/TopBlocksContainer.jsx';
import { getBlocks, getAccounts } from '../actions';
import '../static/css/style.css';

class App extends Component {

  componentDidMount() {
    store.dispatch(getBlocks());
    store.dispatch(getAccounts());
  }

  render() {
    return (
      <div className="container xplorer">
        <div className="row">
          <div className="col-sm-6">
            <a href="#" className="logo"><img src="../static/images/logo.png" /></a>
          </div>
          <div className="col-sm-6">
            <SearchFormContainer />
          </div>
        </div>


        <h1>DAV Block Explorer</h1>

        <div className="gray-block">
          <TopBlocksContainer />
          <div className="row">
            <BlocksContainer />
            <AccountsContainer />
          </div>

        </div>
      </div>
    );
  }
}

export default App;


