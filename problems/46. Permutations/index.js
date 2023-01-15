/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  function dfs(arr) {
    if (arr.length === nums.length) {
      result.push(arr);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) continue;
      dfs([...arr, nums[i]]);
    }
  }
  dfs([]);
  return result;
};
