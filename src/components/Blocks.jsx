import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Block from "./Block.jsx";

class Blocks extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="col-sm-6">
        <h3 className="block-title">Blocks</h3>
        {this.props.blocks.map((block, index) => <Block
          key={index}
          block={block}
          date={new Date(block.timestamp * 1000)} />
        )}
      </div>
    );
  }
}

Blocks.propTypes = {
  blocks: PropTypes.array,
};

export default Blocks;
