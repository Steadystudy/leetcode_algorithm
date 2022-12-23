/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] >= nums[left]) {
      if (target >= nums[left] && target < nums[middle]) {
        right = middle;
      } else {
        left = middle + 1;
      }
    } else {
      if (target > nums[middle] && target <= nums[right]) {
        left = middle + 1;
      } else {
        right = middle;
      }
    }
  }

  return nums[left] === target ? left : -1;
};
