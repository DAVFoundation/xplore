import {connect} from 'react-redux';
import TopBlocks from '../components/TopBlocks.jsx';
import {getRpcServer} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  getRpcServer: () => dispatch(getRpcServer())
});

const mapStateToProps = (state) => ({
  blockList: state.topBlocks.blockList
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBlocks);
