import { connect } from 'react-redux';
import Accounts from '../components/Accounts.jsx';

const mapDispatchToProps = () => ({});

export default connect(
  (state) => ({
    accounts: state.accounts,
  }),
  mapDispatchToProps
)(Accounts);
