/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let result = 0;
  let start = 0;
  let end = start + 1;
  while (start < nums.length - 2) {
    const arr = [nums[start]];
    const art = nums[end] - nums[end - 1];
    for (let i = end; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] !== art) break;

      arr.push(nums[i]);
      if (arr.length >= 3) {
        result++;
      }
    }
    start++;
    end = start + 1;
  }

  return result;
};
