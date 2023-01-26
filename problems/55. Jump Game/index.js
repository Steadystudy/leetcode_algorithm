/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let i = 0;
  while (true) {
    const a = nums[i];
    const newArr = [i, a];
    for (let j = i + 1; j <= i + a; j++) {
      if (newArr[1] < j + nums[j]) {
        newArr[0] = j;
        newArr[1] = j + nums[j];
      }
    }
    if (newArr[1] >= nums.length - 1) return true;
    if (i === newArr[0]) return false;
    i = newArr[0];
  }
};
