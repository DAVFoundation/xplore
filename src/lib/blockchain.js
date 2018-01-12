import Web3 from 'web3';
const port = 8545;
const web3 = new Web3(new Web3.providers.HttpProvider(`http://localhost:${port}`));

export const getAccounts = () => web3.eth.getAccounts();

export const getBlocks = () => {
  const maxBlockCount = 10;
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
    .then(blocks => Promise.resolve(blocks));
};

export const getLatestBlock = () => {
  return web3.eth
    .getBlockNumber()
    .then(latestBlock => {
      console.log(latestBlock);
      return latestBlock;
    });
};

export const getTransactionCount = (block) => {
  return web3.eth
    .getBlockTransactionCount(block)
    .then(count => {
      console.log(count);
      return count;
    });
};

export const getMiningStatus = () => {
  return web3.eth
    .isMining()
    .then(status=>{
      console.log(status);
      return status;
    });
};
