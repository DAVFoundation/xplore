import React from 'react';
import PropTypes from 'prop-types';

const Blocks = ({blocks}) => (
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
      {blocks.map((block,index) => (
        <div className="row" key={index}>
          <div className="col-xs-4 text-left">
            <p className="block-number">{block.number}</p>
          </div>
          <div className="col-xs-4 text-center">
            <p>{block.transactions.length}</p>
          </div>
          <div className="col-xs-4 text-right">
            <p>{block.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

Blocks.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default Blocks;
