export const truncate = (addressOrHash, leadingCharacterCount = 4, trailingCharacterCount = 4) => {
  const truncated = addressOrHash ? addressOrHash.substring(0, leadingCharacterCount) + "..." + addressOrHash.substring(addressOrHash.length - (trailingCharacterCount + 1), addressOrHash.length - 1) : 'N/A';
  return truncated;
};
