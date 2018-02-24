export const truncate = (
  text,
  leadingCharacterCount = 4,
  trailingCharacterCount = 4
) => {
  if (!text) {
    return 'N/A';
  } else {
    var truncated = text.substring(0, leadingCharacterCount);
    truncated += '...';
    truncated += text.substring(
      text.length - (trailingCharacterCount + 1),
      text.length - 1
    );
  }
  return truncated;
};
