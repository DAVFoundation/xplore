import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import SearchForm from '../components/SearchForm.jsx';
import {submitSearchForm} from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  submitSearchForm: (obj) => dispatch(submitSearchForm(obj))
});

const Comp = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default reduxForm({
  form: 'search-form'
})(Comp);
