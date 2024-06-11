const sumAll = function (num1, num2) {
  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);
  let result = 0;

  for (let i = start; i <= end; i++) {
    result += i;
  }

  return result;
};

sumAll(-10, 4);

// Do not edit below this line
module.exports = sumAll;
