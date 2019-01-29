import React, {Component} from 'react';
import HeaderSection from './HeaderSection.jsx';
import PropTypes from 'prop-types';

class HeaderSectionLastBlock extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (<HeaderSection key={0} action={this.props.action} title={this.props.title} classId={this.props.class} icon={this.props.icon} value={this.props.value}/>);
  }
}

HeaderSectionLastBlock.propTypes = {
  action: PropTypes.string,
  class: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string
};

export default HeaderSectionLastBlock;