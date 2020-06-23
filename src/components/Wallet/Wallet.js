import React, { Component } from 'react';

export class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
  }

  /**
   * Update amount
   */
  updateAmount = (event) => {
    this.setState({
      amount: parseInt(event.target.value, 10),
    });
  };

  /**
   * Deposit amount
   */
  depositAmount = () => this.props.depositAmount(this.state.amount);

  /**
   * Withdraw amount
   */
  withdrawAmount = () => this.props.withdrawAmount(this.state.amount);

  /**
   * Render wallet component
   */
  render() {
    return (
      <div className="ui form">
        <div className="inline fields">
          <div className="five wide field">
            <input
              type="text"
              placeholder="Amount"
              className="input-wallet"
              onChange={this.updateAmount}
            />
          </div>

          <div className="five wide field">
            <button
              className="ui primary basic button btn-deposit"
              onClick={this.depositAmount}
            >
              Deposit
            </button>
            <button
              className="ui secondary basic button btn-withdraw"
              onClick={this.withdrawAmount}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    );
  }
}
