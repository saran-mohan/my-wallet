import { SET_BALANCE, DEPOSIT, WITHDRAW } from '../actions/types';

export default (state = 0, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return action.balance;
    case DEPOSIT:
      return state + action.amount;
    case WITHDRAW:
      return state - action.amount;
    default:
      return state;
  }
};
