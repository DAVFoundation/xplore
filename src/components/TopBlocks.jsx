import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TopBlocks extends Component {
  constructor(props){
    super(props);
  }

  render(){

    var topList = this.props.blockList.map((block, index) => {
      return (<BlockItem key={index} action={block.action} title={block.title} classId={block.class} icon={block.icon}/>);
    });
    return(
      <div className="row">
        {topList}
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
    let imgPath = `../static/images/${this.props.icon}`;
    return(
      <div className="col-sm-3">
        <div className={this.props.classId}>
          <div className="row">
            <div className="col-xs-8">
              <h4>{this.props.title}</h4>
              <h3></h3>
            </div>
            <div className="col-xs-4">
              <img src={imgPath}/>
            </div>
          </div>
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
