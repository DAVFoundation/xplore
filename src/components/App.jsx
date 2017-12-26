import React, { Component } from 'react';
import store from '../store';
import BlocksContainer from '../containers/BlocksContainer.jsx';
import { getBlocks } from '../actions';

class App extends Component {

  componentDidMount() {
    store.dispatch(getBlocks());
  }

  render() {
    return <BlocksContainer />;
  }
}

export default App;


