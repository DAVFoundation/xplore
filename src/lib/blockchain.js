import Web3 from 'web3';
const port = 8545;
const web3 = new Web3(new Web3.providers.HttpProvider(`http://localhost:${port}`));

export const getAccounts = () => {
  return web3.eth
    .getAccounts()
    .then((accounts)=>{
      let acc = [];
      for(var i in accounts){

        acc.push(getBalance(accounts[i]));
      }
      return Promise.all(acc);
    })
    .then(acc => {
      return Promise.resolve(acc);
    });
};

export const getTransactions = async () => {
  const maxTransactionsCount = 10;
  const blocks = await getBlocks(10);

  let transactions = [];
  for (let i in blocks) {
    let blockTransactions;
    if (transactions.length < maxTransactionsCount){
      blockTransactions = await Promise.all(blocks[i].transactions.map(async (hash) => {
        const tx = await web3.eth.getTransaction(hash);
        tx.ethValue = web3.utils.fromWei(tx.value, 'ether');
        return tx;
      }));
      transactions = transactions.concat(blockTransactions);
    } else {
      break;
    }
  }
  transactions = transactions.slice(0, maxTransactionsCount);
  return transactions;
};

function getBalance(account){
  return web3.eth
    .getBalance(account)
    .then((bal)=>{
      let obj = {};
      obj["address"] = account;
      obj["balance"] = web3.utils.fromWei(bal);
      return obj;
    });
}

export const getBlocks = (maxBlockCount = 3) => {
  // get block count
  return web3.eth
    .getBlockNumber()
    .then(latestBlock => {
      let blocks = [];
      let nextBlock = latestBlock;
      // fetch last blocks
      while (nextBlock >= 0 && blocks.length < maxBlockCount) {
        blocks.push(web3.eth.getBlock(nextBlock));
        nextBlock--;
      }
      return Promise.all(blocks);
    })
    .then(blocks => {
      return Promise.resolve(blocks);
    });
};

export const getLatestBlock = () => {
  web3.eth
    .getBlockNumber()
    .then(latestBlock => {
      console.log(latestBlock);
      return latestBlock;
    });
};

export const getTransactionCount = (block) => {
  web3.eth
    .getBlockTransactionCount(block)
    .then(count => {
      console.log(count);
      return count;
    });
};

export const getMiningStatus = () => {
  web3.eth
    .isMining()
    .then(status=>{
      console.log(status);
      return status;
    });
};

export const search = (query) => {
  let type = 'tx';
  if(!isNaN(query)){
    type = 'block';
  }else if(web3.utils.isAddress(query)){
    type = 'address';
  }

  switch(type){
  case 'tx':
    web3.eth
      .getTransaction(query)
      .then(tx=>{
        console.log(tx);
      });
    break;
  case 'block':
    web3.eth
      .getBlock(parseInt(query))
      .then(block => {
        console.log(block);
      });
    break;
  case 'address':
    break;
  }

};
