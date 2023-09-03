const fibonacci = function(n) {
  n = Number(n);
  if (n < 1) return 'OOPS';
  let currentFib = 1;
  let prevFib = 0;
  let nextFib = 1;
  for (let i = 1; i < n; i++) {
    nextFib = currentFib + prevFib;
    prevFib = currentFib;
    currentFib = nextFib;
  }
  return currentFib;
};

// Do not edit below this line
module.exports = fibonacci;
