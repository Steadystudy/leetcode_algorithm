/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  let SecondMax = nums[0];
  let FirstMax = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const maxAtCurrent = Math.max(nums[i] + SecondMax, FirstMax);

    SecondMax = FirstMax;
    FirstMax = maxAtCurrent;
  }

  return FirstMax;
};
