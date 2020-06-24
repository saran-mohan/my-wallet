const { SET_BALANCE, DEPOSIT, WITHDRAW } = require('./types');
const { setBalance, depositAmount, withdrawAmount } = require('./balance');



it('create an action to set the balance', () => {
  const balance = 30;
  const expectedAction = {
    balance,
    type: SET_BALANCE
  };
  expect(setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit to the balance', () => {
  const amount = 50;
  const expectedAction = {
    amount,
    type: DEPOSIT,
  };
  expect(depositAmount(amount)).toEqual(expectedAction);
});

it('creates an action to withdraw the balance', () => {
  const amount = 70;
  const expectedAction = {
    amount,
    type: WITHDRAW,
  };
  expect(withdrawAmount(amount)).toEqual(expectedAction);
});