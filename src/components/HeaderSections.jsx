import React, {Component} from 'react';
import HeaderSectionLastBlock from './HeaderSectionLastBlock.jsx';
import HeaderSectionRPCServer from './HeaderSectionRPCServer.jsx';
import HeaderSectionTransactions from './HeaderSectionTransactions.jsx';
import HeaderSectionMiningStatus from './HeaderSectionMiningStatus.jsx';

class HeaderSections extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="row">
        <HeaderSectionLastBlock />
        <HeaderSectionRPCServer />
        <HeaderSectionTransactions />
        <HeaderSectionMiningStatus />
      </div>
    );
  }
}

export default HeaderSections;
