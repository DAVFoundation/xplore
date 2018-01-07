import { connect } from 'react-redux';
import Contracts from '../components/Contracts.jsx';

const mapDispatchToProps = () => ({});

export default connect(
  (state) => ({
    contracts: state.contracts,
  }),
  mapDispatchToProps
)(Contracts);
