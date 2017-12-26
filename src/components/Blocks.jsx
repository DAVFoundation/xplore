import React from 'react';
import PropTypes from 'prop-types';

const Blocks = ({blocks}) => (
  <div>
    {blocks.map(block => (
      <div key={block.id}>{block.id} - {block.transactions}</div>
    ))}
  </div>
);

Blocks.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default Blocks;
