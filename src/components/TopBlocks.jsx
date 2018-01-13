import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TopBlocks extends Component {
  constructor(props){
    super(props);
  }

  render(){

    var topList = this.props.blockList.map((block, index) => {
      return (<BlockItem key={index} action={bounty.action} title={bounty.title} classId={bounty.class} icon={bounty.icon}/>)
    });
    return(
      <div>

      </div>
    );
  }
}

class BlockItem extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    return(
      <div lassName="col-sm-3">
        <div className={classId}>
          <h4>{title}</h4>
          <h3>{icon}</h3>
        </div>
      </div>
    );
  }
}

TopBlocks.propTypes = {
  blockList: PropTypes.array
};

BlockItem.propTypes = {
  classId: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string
};

export default TopBlocks;
