import {connect} from 'react-redux';
import TopBlocks from '../components/TopBlocks.jsx';

const mapStateToProps = (state) => ({
  blockList: state.topBlocks.blockList
});

export default connect(mapStateToProps)(TopBlocks);
