import React from 'react';
import PropTypes from 'prop-types';

const Blocks = ({blocks}) => (
  <div>
    <h1>Latest Blocks:</h1>
    {blocks.map(block => (
      <div key={block.hash}>{block.number} - {block.hash}</div>
    ))}
  </div>
);

Blocks.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default Blocks;
