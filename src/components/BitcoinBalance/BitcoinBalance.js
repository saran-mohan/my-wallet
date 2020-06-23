import React, { Component } from 'react';

export class BitcoinBalance extends Component {
  /**
   * Fetch current bpi on component mount
   */
  componentDidMount() {
    this.props.fetchBitcoin();
  }
  /**
   * Compute bitcoin balance
   */
  displayBitcoinBalance() {
    const { balance, bitcoin } = this.props;
    try {
      return balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
    } catch (e) {
      return 0;
    }
  }
  /**
   * Render Bitcoin balance component
   */
  render() {
    return (
      <h3 className="balance">
        Bitcoin Balance:{' '}
        <span className="ui small header">{this.displayBitcoinBalance()}</span>
      </h3>
    );
  }
}
