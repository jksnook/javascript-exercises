const removeFromArray = function(array, ...elementsToRemove) {
  let modifiedArray = [];
  for (element of array) {
    if (!(elementsToRemove.includes(element))) {
      modifiedArray.push(element);
    }
  }
  return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
