import React from 'react';
import { shallow } from 'enzyme';
import  { shallowToJson } from 'enzyme-to-json';


import { App } from './App';

describe('App', () => {
  let wrapped;
  const props = {
    balance: 20,
  };

  beforeEach(() => {
    wrapped = shallow(<App {...props} />)
  });

  it('renders properly', () => {
    expect(shallowToJson(wrapped)).toMatchSnapshot();
  });

  it('displays the header text', () => {
    expect(wrapped.find('.title').text()).toEqual('My Wallet App!');
  });

  it('displays the balance from props', () => {
    expect(wrapped.find('.balance').text()).toEqual('Wallet Balance: 20');
  });

  it('contains a connected component called Wallet', () => {
    expect(wrapped.find('Connect(Wallet)').exists()).toEqual(true);
  });

  it('contains a connected component called BitcoinBalance', () => {
    expect(wrapped.find('Connect(BitcoinBalance)').exists()).toEqual(true);
  });

});