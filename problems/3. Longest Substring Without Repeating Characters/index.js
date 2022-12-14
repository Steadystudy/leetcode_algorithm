/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let stack = [];
  let maxLength = 0;

  s.split('').forEach((letter) => {
    if (stack.includes(letter)) {
      const index = stack.findIndex((value) => value === letter);
      stack = stack.slice(index + 1);
    }
    stack.push(letter);
    maxLength = Math.max(maxLength, stack.length);
  });

  return maxLength;
};
