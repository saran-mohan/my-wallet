import { connect } from 'react-redux';

import { depositAmount, withdrawAmount } from '../../actions/balance';
import { Wallet } from '../../components/Wallet/Wallet';

const mapDispatchToProps = {
  depositAmount,
  withdrawAmount,
};

export default connect(null, mapDispatchToProps)(Wallet);
