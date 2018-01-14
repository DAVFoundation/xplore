import React from 'react';
import PropTypes from 'prop-types';

const Blocks = ({accounts}) => (
  <div className="col-sm-6">
    <h3 className="block-title">Accounts</h3>
    <div className="white-container">
      <div className="row">
        <div className="col-xs-6 text-left">
          <p className="header-custom">Address</p>
        </div>
        <div className="col-xs-6 text-right">
          <p className="header-custom">Balance</p>
        </div>
      </div>

      <div className="header-separator"></div>
      {accounts.map(account => (
        <div key={account} className="address-number">{account}</div>
      ))}
    </div>
  </div>
);

Blocks.propTypes = {
  accounts: PropTypes.array.isRequired,
};

export default Blocks;
