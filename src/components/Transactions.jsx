import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Transactions extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let transactions = this.props.transactions.map((transaction, index) => {
      return (
        <div key={index} className="white-container transaction-item">
          <div className="row">
            <div className="col-xs-6 text-left">
              <p className="header-custom"><strong>{transaction.ethValue}</strong> ETH</p>
            </div>
          </div>
          <div className="header-separator"></div>
          <div className="row">
            <div className="col-xs-12">
              <p className="hash">Hash: <span className="blue">{transaction.hash}</span></p>
              <p>From: <span className="blue">{transaction.from}</span></p>
              <p>To: <span className="blue">{transaction.to}</span></p>
            </div>
          </div>
        </div>
      );
    });

    return(
      <div className="col-sm-6">
        <h3 className="block-title">Transactions</h3>
        {transactions}
      </div>
    );
  }
}


Transactions.propTypes = {
  transactions: PropTypes.array,
};

export default Transactions;
