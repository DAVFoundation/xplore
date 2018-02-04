import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { truncate } from "../lib/utils";

class Events extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let events = this.props.events.map((event, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-xs-3 text-left">
            <p>{event.event}</p>
          </div>
          <div className="col-xs-6 text-center">
            <p>{event.contractName} (<span className="address-number">{truncate(event.address, 8, 8)}</span>)</p>
          </div>
          <div className="col-xs-3 text-right">
            <p>{event.blockNumber}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="col-sm-6">
        <h3 className="block-title">Events</h3>
        <div className="white-container">
          <div className="row">
            <div className="col-xs-3 text-left">
              <p className="header-custom">Event</p>
            </div>
            <div className="col-xs-6 text-center">
              <p className="header-custom">Contract</p>
            </div>
            <div className="col-xs-3 text-right">
              <p className="header-custom">Block</p>
            </div>
          </div>
          <div className="header-separator"></div>
          {events}
        </div>
      </div>
    );
  }
}


Events.propTypes = {
  events: PropTypes.array.isRequired,
};

export default Events;
