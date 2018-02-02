import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Blocks extends Component{
  constructor(props){
    super(props);
  }

  render(){

    let blocks = this.props.blocks.map((block, index) => {
      let date = new Date(block.timestamp * 1000);
      let dateOptions = {hour: '2-digit', minute: '2-digit',second:'2-digit', hour12: false};
      return (
        <div className="row" key={index}>
          <div className="col-xs-4 text-left">
            <p className="block-number">{block.number}</p>
          </div>
          <div className="col-xs-4 text-center">
            <p>{block.transactions.length}</p>
          </div>
          <div className="col-xs-4 text-right">
            <p>{date.toLocaleString('en-US', dateOptions)}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="col-sm-6">
        <h3 className="block-title">Block</h3>
        <div className="white-container">
          <div className="row">
            <div className="col-xs-4 text-left">
              <p className="header-custom">Block #</p>
            </div>
            <div className="col-xs-4 text-center">
              <p className="header-custom">Transactions</p>
            </div>
            <div className="col-xs-4 text-right">
              <p className="header-custom">Time</p>
            </div>
          </div>
          <div className="header-separator"></div>
          {blocks}
        </div>
      </div>
    );
  }
}


Blocks.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default Blocks;
