import React, {Component} from 'react';
import store from '../store';
import BlocksContainer from '../containers/BlocksContainer.jsx';
import AccountsContainer from '../containers/AccountsContainer.jsx';
import SearchFormContainer from '../containers/SearchFormContainer.jsx';
import HeaderSectionsContainer from '../containers/HeaderSectionsContainer.jsx';
import TransactionsContainer from '../containers/TransactionsContainer.jsx';
import EventsContainer from '../containers/EventsContainer.jsx';
import {getBlocks, getAccounts, getTransactions, getEvents} from '../actions';
import '../static/css/style.css';

class App extends Component {

  componentDidMount() {
    store.dispatch(getEvents());
    store.dispatch(getBlocks());
    store.dispatch(getAccounts());
    store.dispatch(getTransactions());
  }

  render() {
    return (
      <div className="container-fluid xplorer">
        <div className="row">
          <div className="col-sm-6">
            <a href="#" className="logo"><img src="../static/images/xplore-logo.png"/></a>
          </div>
          <div className="col-sm-6">
            <SearchFormContainer/>
          </div>
        </div>


        <h1>DAV Block Explorer</h1>

        <div className="gray-block">
          <HeaderSectionsContainer/>
          <div className="row">
            <TransactionsContainer/>
            <AccountsContainer/>
          </div>
          <div className="row">
            <BlocksContainer/>
            <EventsContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


