import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reducers from './reducers';
import { Provider } from 'react-redux';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxThunk, reduxPromise),
  );
  return <Provider store={store}>{children}</Provider>;
};
