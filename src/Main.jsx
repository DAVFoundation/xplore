import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import BlocksContainer from './containers/BlocksContainer.jsx';

ReactDOM.render(
  <Provider store={store}>
    <BlocksContainer />
  </Provider>,
  document.getElementById('app')
);
