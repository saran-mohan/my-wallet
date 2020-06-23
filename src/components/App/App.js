import React, { Component } from 'react';
import './App.scss';
import Wallet from '../../containers/Wallet/Wallet';
import { connect } from 'react-redux';
import BitcoinBalance from '../../containers/BitcoinBalance/BitcoinBalance';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app-container">
        <div className="app-wallet">
          <div className="ui card">
            <div className="content">
              <div className="header title">My Wallet App!</div>
            </div>
            <div className="extra content">
              <h3 className="balance">
                Wallet Balance: <span className="ui small header">{this.props.balance}</span>
              </h3>
            </div>
            <div className="content">
              <Wallet />
            </div>
            <div className="extra content">
              <BitcoinBalance />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ balance }) => ({ balance });

export default connect(mapStateToProps)(App);
