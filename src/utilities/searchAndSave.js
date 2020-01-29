const searchAndSave = string => {
  let mySet = new Set();
  let tempStr = '';

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === '[') {
      tempStr += string.charAt(i);
    } else if (
      tempStr.includes('[') &&
      string.charAt(i) !== ']' &&
      string.charAt(i) !== '['
    ) {
      tempStr += string.charAt(i);
    } else if (string.charAt(i) === ']') {
      tempStr += string.charAt(i);
      mySet.add(tempStr);
      tempStr = '';
    }
  }

  return [...mySet];
};

export default searchAndSave;
