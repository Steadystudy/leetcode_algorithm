/**
 * @param {string} s
 * @return {string[][]}
 */
function palindrome(a) {
  const b = [...a].reverse();
  return a.join('') === b.join('');
}

var partition = function (s) {
  const result = [];
  const len = s.length;
  function backTracking(arr, idx) {
    if (idx === len) {
      result.push(arr);
    }
    for (let i = idx; i < len; i++) {
      const k = [...s].splice(idx, i - idx + 1);
      if (palindrome(k)) {
        backTracking([...arr, k.join('')], i + 1);
      }
    }
  }
  backTracking([], 0);
  return result;
};
