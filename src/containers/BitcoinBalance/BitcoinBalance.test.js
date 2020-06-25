import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from '../../Root';

import BitcoinBalance from './BitcoinBalance';

describe('BitcoinBalance', () => {
  let wrapped;

  describe('When there are valid bitcoin props', () => {
    const mockResponse = {
      bpi: {
        USD: {
          rate: '12,500',
        },
      },
    };

    beforeEach(() => {
      moxios.install();
      moxios.stubRequest('https://api.coindesk.com/v1/bpi/currentprice.json', {
        status: 200,
        response: mockResponse,
      });

      const initialState = {
        balance: 3500,
      };

      wrapped = mount(
        <Root initialState={initialState}>
          <BitcoinBalance />
        </Root>
      );
    });

    it('dispatches the fetchBitcoin method it receives from props', () => {
      expect(wrapped.find('h3').text()).toEqual('Bitcoin Balance: 0.28');
    });

    afterEach(() => {
      moxios.uninstall();
    });
  });
});
