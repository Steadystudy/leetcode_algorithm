/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let index, temp;
  for (let i = 0; i < nums.length; i++) {
    index = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[index]) {
        index = j;
      }
    }
    temp = nums[index];
    nums[index] = nums[i];
    nums[i] = temp;
  }
};
