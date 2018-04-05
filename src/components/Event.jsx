import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { truncate } from "../lib/utils";

class Event extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const characterCount = 8;
    return(
      <div className="row">
        <div className="col-xs-3 text-left">
          <p>{event.event}</p>
        </div>
        <div className="col-xs-6 text-center">
          <p>{event.contractName} (<span className="address-number">
            {truncate(event.address, characterCount, characterCount)}</span>)</p>
        </div>
        <div className="col-xs-3 text-right">
          <p>{event.blockNumber}</p>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Event;
