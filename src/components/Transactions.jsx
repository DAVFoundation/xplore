import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { truncate } from "../lib/utils";

class Transactions extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let transactions = this.props.transactions.map((transaction, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-xs-3 text-center">
            <p>{truncate(transaction.hash, 6)}</p>
          </div>
          <div className="col-xs-3 text-center">
            <p>{truncate(transaction.from, 6)}</p>
          </div>
          <div className="col-xs-3 text-center">
            <p>{truncate(transaction.to, 6)}</p>
          </div>
          <div className="col-xs-3 text-center">
            <p>{transaction.blockNumber}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="col-sm-6">
        <h3 className="block-title">Transactions</h3>
        <div className="white-container">
          <div className="row">
            <div className="col-xs-3 text-center">
              <p className="header-custom">Hash</p>
            </div>
            <div className="col-xs-3 text-center">
              <p className="header-custom">From</p>
            </div>
            <div className="col-xs-3 text-center">
              <p className="header-custom">To</p>
            </div>
            <div className="col-xs-3 text-center">
              <p className="header-custom">Block</p>
            </div>
          </div>
          <div className="header-separator"></div>
          {transactions}
        </div>
      </div>
    );
  }
}


Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default Transactions;
