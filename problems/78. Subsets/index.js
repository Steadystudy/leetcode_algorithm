/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const auxArr = [];
  let i = 0;

  function recur(nums, i, auxArr) {
    if (i === nums.length) {
      result.push(auxArr);
      return;
    }
    recur(nums, i + 1, [...auxArr, nums[i]]);
    recur(nums, i + 1, auxArr);
  }

  recur(nums, i, auxArr);
  return result;
};
