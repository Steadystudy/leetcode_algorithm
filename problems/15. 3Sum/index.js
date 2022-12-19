/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const answer = [];
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
    const target = 0 - sortedNums[i];
    let left = i + 1;
    let right = sortedNums.length - 1;
    while (right > left) {
      let sum = sortedNums[left] + sortedNums[right];
      if (target > sum) {
        left++;
      } else if (sum > target) {
        right--;
      } else if (target === sum) {
        answer.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        // [-4, 0, 0, 1, 3, 4, 4]
        while (sortedNums[left] === sortedNums[left + 1]) left++;
        while (sortedNums[right] === sortedNums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return answer;
};
