

import rootReducer from './index';

it('should initialse the initial state', () => {
  expect(rootReducer({}, {})).toEqual({
    balance: 0,
    bitcoin: {}
  });
});