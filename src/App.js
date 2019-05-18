import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './store/reducers';
import Todo from './atomic.ui/templates/Todo';

// Allows redux debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}

export default App;
