import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
    return;
  }

  submit(){
    console.log("values");
    return;
  }

  render(){
    return (
      <div className="row">
        <form onSubmit={this.submit}>
          <div className="col-xs-9">
            <input name="search" placeholder="Search by Tx Hash / Block # / Address" component="input" type="text" onChange={this.handleChange} value={this.state.value} />
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
