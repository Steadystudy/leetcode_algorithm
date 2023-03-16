/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const arr = [];
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) ? map.get(nums[i]) + 1 : 1);
  }
  for (const [key, value] of map) {
    arr.push([key, value]);
  }
  arr.sort((a, b) => b[1] - a[1]);
  for (let j = 0; j < k; j++) {
    ans.push(arr[j][0]);
  }

  return ans;
};
