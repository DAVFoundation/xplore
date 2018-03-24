import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Textfit } from 'react-textfit';

class HeaderSections extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var headerList = this.props.sectionList.map((section, index) => {
      return (<SectionItem key={index} action={section.action} title={section.title} classId={section.class} icon={section.icon} value={section.value}/>);
    });
    return(
      <div className="row">
        {headerList}
      </div>
    );
  }
}

class SectionItem extends Component {
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
              <Textfit mode="multi" min={10}>
                {this.props.value}
              </Textfit>
            </div>
            <div className="col-xs-4">
              <img src={imgPath}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  newMethod() {
    return 10;
  }
}

HeaderSections.propTypes = {
  sectionList: PropTypes.array
};

SectionItem.propTypes = {
  classId: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string
};

export default HeaderSections;
