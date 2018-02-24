export const truncate = (text, visibleCharacters=4) => {
  if(! text){
    return `N/A`;
  }else{
    var truncated = text.substring(0, visibleCharacters);
    truncated += "...";
    truncated += text.substring( text.length - (visibleCharacters + 1), text.length - 1);
  }
  return truncated;
};
