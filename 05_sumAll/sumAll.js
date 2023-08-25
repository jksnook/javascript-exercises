const sumAll = function(start, end) {
  if (typeof(start) !== "number" || typeof(end) !== "number") return "ERROR";
  if (start < 0 || end < 0) return "ERROR";
  let sum = 0;
  if (end > start) {
    for (let i = start; i <= end; i++) {
      sum += i
    }
  }
  else {
    for (let i = end; i <= start; i++) {
      sum += i
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
