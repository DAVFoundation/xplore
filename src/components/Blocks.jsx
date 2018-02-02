import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { truncate } from "../lib/utils";

class Blocks extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let blocks = this.props.blocks.map((block, index) => {
      let date = new Date(block.timestamp * 1000);
      let dateOptions = {hour: '2-digit', minute: '2-digit',second:'2-digit', hour12: false};
      return (
        <div key={index} className="white-container transaction-item">
          <div className="row">
            <div className="col-xs-6 text-left">
              <p className="header-custom"><strong>{block.ethValue}</strong> {truncate(block.hash, 20, 20)}</p>
            </div>
          </div>
          <div className="header-separator"></div>
          <div className="row">
            <div className="col-xs-12">
              <p className="hash">Block: <span className="blue">{block.number}</span></p>
              <p>Transactions: <span className="blue">{block.transactions.length}</span></p>
              <p>Time: <span className="blue">{date.toLocaleString('en-US', dateOptions)}</span></p>
            </div>
          </div>
        </div>
      );
    });

    return(
      <div className="col-sm-6">
        <h3 className="block-title">Blocks</h3>
        {blocks}
      </div>
    );
  }
}


Blocks.propTypes = {
  blocks: PropTypes.array,
};

export default Blocks;
