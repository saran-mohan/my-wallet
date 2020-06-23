import { connect } from 'react-redux';
import { fetchBitcoin } from '../../actions/bitcoin';
import { BitcoinBalance } from '../../components/BitcoinBalance/BitcoinBalance';

const mapDispatchToProps = {
  fetchBitcoin,
};
const mapStateToProps = ({balance, bitcoin}) => ({balance, bitcoin});
export default connect(mapStateToProps, mapDispatchToProps)(BitcoinBalance);