import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccountBalance from './AccountBalance.jsx';
import config from '../config';

class Accounts extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const decimalCount = config('account_balance_decimal_count');
    return(
      <div className="col-sm-6">
        <h3 className="block-title">Accounts</h3>
        <div className="white-container">
          <div className="row">
            <div className="col-xs-6 text-left">
              <p className="header-custom">Address</p>
            </div>
            <div className="col-xs-6 text-right">
              <p className="header-custom">Balance</p>
            </div>
          </div>

          <div className="header-separator"></div>
          {this.props.accounts.map((account, index) => {
            return (
              <AccountBalance key={index}
                address={account.address}
                balance={parseFloat(account.balance).toFixed(decimalCount)} />
            );
          })}
        </div>
      </div>
    );
  }
}


Accounts.propTypes = {
  accounts: PropTypes.array.isRequired,
};

export default Accounts;
