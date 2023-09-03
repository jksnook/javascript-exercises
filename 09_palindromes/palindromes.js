const palindromes = function (text) {
  const cleanText = text.toLowerCase().split('').filter(c => {
    if (c === '.' || c === ',' || c === '!' || c === "'" || c === ' ') {
      return false;
    }
    return true;
  });
  if (cleanText.join() === cleanText.slice().reverse().join()) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
