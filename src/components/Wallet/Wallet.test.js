import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import  { Wallet } from './Wallet';

describe('Wallet', () => {
  let wallet;
  const mockWithdraw = jest.fn();
  const mockDeposit = jest.fn();
  const props = {
    depositAmount: mockDeposit,
    withdrawAmount: mockWithdraw,
  };

  beforeEach(() => {
    wallet = shallow(<Wallet {...props} />)
  });

  it('renders correctly', () => {
    expect(shallowToJson(wallet)).toMatchSnapshot();
  });

  it('creates an input to deposit or withdraw from balance', () => {
    expect(wallet.find('.input-wallet').exists()).toEqual(true);
  });

  describe('when the user types into the wallet input', () => {
    const userBalance = '25';

    beforeEach(() => {
      wallet.find('.input-wallet').simulate('change', {
        target: {
          value: userBalance
        }
      });
    });

    it('updates the local wallet amount in state', () => {
      expect(wallet.state().amount).toEqual(parseInt(userBalance, 10));
    });

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click');
      });

      it('should dispatch the depositAmount action creator', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe('and the user wants to make a withdraw', () => {
      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click');
      });

      it('should dispatch the withdrawAmount action creator', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });

});