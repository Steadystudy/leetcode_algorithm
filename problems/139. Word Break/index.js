/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let result = false;
  const len = s.length;
  const dp = new Map();
  function backTracking(str) {
    if (str.length > len || result) {
      return;
    }
    if (str === s) {
      result = true;
      return;
    }
    for (const word of wordDict) {
      let newStr = str + word;
      if (dp.has(newStr)) continue;
      if (s.startsWith(newStr)) {
        dp.set(newStr, true);
        backTracking(newStr);
      }
    }
  }
  backTracking('');
  return result;
};
