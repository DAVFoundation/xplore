import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { truncate } from "../lib/utils";

class Block extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const dateOptions = { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: false };
    return(
      <div className="white-container transaction-item">
        <div className="row">
          <div className="col-xs-6 text-left">
            <p className="header-custom"><strong>{this.props.block.ethValue}</strong> {truncate(this.props.block.hash, 20, 20)}</p>
          </div>
        </div>
        <div className="header-separator"></div>
        <div className="row">
          <div className="col-xs-12">
            <p className="hash">Block: <span className="blue">{this.props.block.number}</span></p>
            <p>Transactions: <span className="blue">{this.props.block.transactions.length}</span></p>
            <p>Time: <span className="blue">{this.props.date.toLocaleString('en-US', dateOptions)}</span></p>
          </div>
        </div>
      </div>
    );
  }
}

Block.propTypes = {
  block: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
};

export default Block;