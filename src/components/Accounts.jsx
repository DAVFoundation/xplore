import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Accounts extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let accounts = this.props.accounts.map((account, index) => {
      let bal = parseFloat(account.balance).toFixed(2);
      return (
        <div className="row" key={index}>
          <div className="col-xs-6 text-left">
            <p className="address-number">{account.address}</p>
          </div>
          <div className="col-xs-6 text-right">
            <p>
              <strong>{bal}</strong>
              ETH
            </p>
          </div>
        </div>
      );
    });

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
          {accounts}
        </div>
      </div>
    );
  }
}


Accounts.propTypes = {
  accounts: PropTypes.array.isRequired,
};

export default Accounts;
