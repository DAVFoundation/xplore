import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HeaderSection extends Component {
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
              {this.props.value}
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

HeaderSection.propTypes = {
  classId: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string
};

export default HeaderSection;
