const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = n.toString().split('');
  let max = 0;
  for (let i = 0; i < num.length; i++) {
    const numIndex = parseInt(num.slice(0,i).join('') + num.slice(i+1).join(''));
    if(numIndex > max) max = numIndex;
  }
  return max;
}

module.exports = {
  deleteDigit
};
