export const truncate = (
  text,
  leadingCharacterCount = 4,
  trailingCharacterCount = 4
) => {
  if (!text) {
    return 'N/A';
  } else {
    var truncated = text.slice(0, leadingCharacterCount);
    truncated += '...';
    truncated += text.slice(text.length - trailingCharacterCount, text.length);
  }
  return truncated;
};
