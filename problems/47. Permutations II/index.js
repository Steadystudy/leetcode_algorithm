/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort();
  const result = [];
  function dfs(arr, remain) {
    if (arr.length === nums.length) {
      result.push(arr);
      return;
    }
    for (let i = 0; i < remain.length; i++) {
      if (remain[i] === remain[i + 1]) {
        continue;
      }
      const r = [...remain];
      r.splice(i, 1);
      dfs([...arr, remain[i]], r);
    }
  }
  dfs([], nums);
  return result;
};
