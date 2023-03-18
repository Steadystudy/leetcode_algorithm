/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const dp = {};
  const totalSum = nums.reduce((acc, cur) => (acc += cur), 0);
  const target = totalSum / 2;
  if (totalSum % 2) return false;
  dp[0] = true;

  for (let i = 0; i < nums.length; i++) {
    for (const key of Object.keys(dp)) {
      const newKey = Number(key) + Number(nums[i]);
      if (dp[newKey] || newKey > target) continue;
      if (newKey === target) return true;
      dp[newKey] = true;
    }
  }

  return false;
};
