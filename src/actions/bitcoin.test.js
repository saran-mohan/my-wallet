import configureStore from 'redux-mock-store';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import moxios from 'moxios';

import { fetchBitcoin } from './bitcoin';
import { FETCH_BITCOIN } from './types';

describe('fetchBitcoin', () => {
  const middlewares = [
    reduxPromise,
    reduxThunk,
  ];
  const mockStore = configureStore(middlewares);
  const store = mockStore({});
  const mockResponse = {
    bpi: {
      USD: {
        rate: '12,500',
      }
    }
  };

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://api.coindesk.com/v1/bpi/currentprice.json', {
      status: 200,
      response: mockResponse,
    })
  });

  it('creates an async action to fetch bitcoin value', () => {
    return store.dispatch(fetchBitcoin()).then(() => {
      const actions = store.getActions();
      const { payload, type } = actions[0];
      expect(type).toEqual(FETCH_BITCOIN);
      expect(payload.data).toEqual(mockResponse);
    })
  });

  afterEach(() => {
    moxios.uninstall();
  });
});