/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let m;
  while (l < r) {
    m = Math.floor((l + r) / 2);
    if (nums[m] > nums[m + 1]) r = m;
    else l = m + 1;
  }
  return l;
};
