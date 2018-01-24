import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Transactions extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let transactions = this.props.transactions.map((transaction, index) => {
      return (
        <div className="row" key={index}>
          <div className="white-container">
            <p>Hash:</p> {transaction.hash}
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
