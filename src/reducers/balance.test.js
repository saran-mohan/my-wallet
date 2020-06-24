import balanceReducer from './balance';
import { SET_BALANCE, DEPOSIT, WITHDRAW } from '../actions/types';

describe('balanceReducer', () => {
  const balance = 20;
  it('sets a balance', () => {
    expect(
      balanceReducer(undefined, {
        balance,
        type: SET_BALANCE,
      })
    ).toEqual(balance);
  });

  it('deposits into the balance', () => {
    const amount = 100;
    const initialState = 50;
    expect(balanceReducer(initialState, {
      amount,
      type: DEPOSIT,
    })).toEqual(initialState + amount);
  });

  it('withdraw from the balance', () => {
    const amount = 30;
    const initialState = 150;
    expect(balanceReducer(initialState, {
      amount,
      type: WITHDRAW,
    })).toEqual(initialState - amount);
  });
});
