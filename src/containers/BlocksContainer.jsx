import { connect } from 'react-redux';
import Blocks from '../components/Blocks.jsx';

const mapDispatchToProps = () => ({});

export default connect(
  (state) => ({
    blocks: state.blocks,
  }),
  mapDispatchToProps
)(Blocks);
