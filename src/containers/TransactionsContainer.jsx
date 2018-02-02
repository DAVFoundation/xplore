import { connect } from 'react-redux';
import Transactions from '../components/Transactions.jsx';

const mapDispatchToProps = () => ({});

export default connect(
  (state) => ({
    transactions: state.transactions,
  }),
  mapDispatchToProps
)(Transactions);
