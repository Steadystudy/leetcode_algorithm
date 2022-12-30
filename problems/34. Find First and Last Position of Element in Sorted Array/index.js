/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length < 2) {
    return nums[0] === target ? [0, 0] : [-1, -1];
  }
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] > target) return [-1, -1];
    if (nums[left] < target) {
      left++;
    }
    if (nums[right] < target) return [-1, -1];
    if (nums[right] > target) {
      right--;
    }
    if (nums[left] === target && nums[right] === target) {
      break;
    }
  }
  return left > right ? [-1, -1] : [left, right];
};
