// Hey Joe, work on the final three tests for returning "ERROR" under negative and non
// numeric numbers. Keep up the great work!

const sumAll = function (num1, num2) {
  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);
  let result = 0;

  for (let i = start; i <= end; i++) {
    result += i;
  }

  return result;
};

sumAll();

// Do not edit below this line
module.exports = sumAll;
