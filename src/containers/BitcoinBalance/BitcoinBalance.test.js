import React from 'react';
// 1. Import mount
import { mount } from 'enzyme';

// 2. Import moxios
import moxios from 'moxios';

// 3. Import Root component
import Root from '../../Root';

// 4. Import Bitcoin Balance - Connected Component
import BitcoinBalance from './BitcoinBalance';
describe('BitcoinBalance', () => {
  let wrapped;

  // 5. Create describe block
  describe('when there are valid bitcoin props', () => {
    // 6. Mock the response
    const mockResponse = {
      bpi: {
        USD: {
          rate: '12,500'
        }
      }
    };

    // 7. Mock the API
    beforeEach(() => {
      moxios.install(); //Turn off any requests issued by axios
      moxios.stubRequest( // intercept the request to this URI and return the given response
        'https://api.coindesk.com/v1/bpi/currentprice.json', {
          status: 200,
          response: mockResponse
        }
      );

      const intialState = {
        balance: 3500,
      }

      // Attempt to render the entire component
      // Attept to render the entire app
      wrapped = mount(
        <Root initialState={intialState}>
          <BitcoinBalance />
        </Root>
      );
    });
    
    // Uninstall mock
    afterEach(() => {
      moxios.uninstall();
    });

    it('dispatches the fetchBitCoin method it receives from props', () => {
      expect(wrapped.find('h3').text()).toEqual('Bitcoin Balance: 0.28');
    });
  });
});