import { SET_BALANCE, DEPOSIT, WITHDRAW } from './types';

/**
 * Set balace to the wallet
 * @param {} balance
 */
export const setBalance = (balance) => {
  return {
    balance,
    type: SET_BALANCE,
  };
};

export const depositAmount = (amount) => {
  return {
    amount,
    type: DEPOSIT,
  };
};

export const withdrawAmount = (amount) => {
  return {
    amount,
    type: WITHDRAW,
  };
};
