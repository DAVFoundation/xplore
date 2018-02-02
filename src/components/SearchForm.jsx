import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';

class SearchForm extends Component{
  constructor(props){
    super(props);
  }

  submit(){
    console.log("values");
    return;
  }

  render(){
    return (
      <div className="row">
        <form onSubmit={this.props.handleSubmit(this.submit)}>
          <div className="col-xs-9">
            <Field name="search" placeholder="Search by Tx Hash / Block # / Address" component="input" type="text"/>
          </div>
          <div className="col-xs-3">
            <button type="submit">SEARCH</button>
          </div>
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitStationForm: PropTypes.func
};

export default SearchForm;
