export const getBlocks = () => {
  return Promise.resolve([{ id: 3, transactions: 4 }, { id: 2, transactions: 3 }, { id: 1, transactions: 1 }]);
};
