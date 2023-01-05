/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let str = '1';
  let k = 1;
  while (k < n) {
    let newStr = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        newStr += `${count}${str[i]}`;
        count = 1;
      }
    }
    str = newStr;
    k++;
  }
  return str;
};
