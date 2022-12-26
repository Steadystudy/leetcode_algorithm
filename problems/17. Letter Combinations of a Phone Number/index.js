/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const phone = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const result = [];
  function recursion(str, i) {
    if (str.length === digits.length) {
      result.push(str);
      return;
    }
    for (const alphabet of phone[digits[i]].split('')) {
      recursion(str + alphabet, i + 1);
    }
  }
  recursion('', 0);
  return result;
};
