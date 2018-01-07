import React from 'react';
import PropTypes from 'prop-types';

const Contracts = ({contracts}) => (
  <div>
    <h1>Contracts:</h1>
    {contracts.map(contract => (
      <div key={contract.address}>{contract.address} - {contract.balance}</div>
    ))}
  </div>
);

Contracts.propTypes = {
  contracts: PropTypes.array.isRequired,
};

export default Contracts;
