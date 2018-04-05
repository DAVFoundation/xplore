import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AccountBalance extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="row">
        <div className="col-xs-6 text-left">
          <p className="address-number">{this.props.address}</p>
        </div>
        <div className="col-xs-6 text-right">
          <p>
            <strong>{this.props.balance}</strong> ETH
          </p>
        </div>
      </div>  
    );
  }
}

AccountBalance.propTypes = {
  address: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired
};

export default AccountBalance;