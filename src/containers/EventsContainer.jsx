import { connect } from 'react-redux';
import Events from '../components/Events.jsx';

const mapDispatchToProps = () => ({});

export default connect(
  (state) => ({
    events: state.events,
  }),
  mapDispatchToProps
)(Events);

