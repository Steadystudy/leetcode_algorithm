/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  function backTracking(arr, num) {
    if (arr.length === k) {
      result.push([...arr]);
      return;
    }
    for (let i = num + 1; i <= n; i++) {
      arr.push(i);
      backTracking(arr, i);
      arr.pop();
    }
  }
  backTracking([], 0);
  return result;
};
