import {connect} from 'react-redux';
import HeaderSections from '../components/HeaderSections.jsx';

const mapStateToProps = (state) => ({
  sectionList: state.headerSections.sectionList
});

export default connect(mapStateToProps)(HeaderSections);
