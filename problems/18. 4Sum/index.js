/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return [];
  const result = [];
  const sortedNums = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length - 3; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
    for (let j = i + 1; j < sortedNums.length - 2; j++) {
      if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) continue;

      const sum1 = sortedNums[i] + sortedNums[j];
      let k = j + 1;
      let l = sortedNums.length - 1;
      while (k < l) {
        if (k > j + 1 && sortedNums[k] === sortedNums[k - 1]) {
          k++;
          continue;
        }

        const sum2 = sortedNums[k] + sortedNums[l];
        if (sum2 === target - sum1) {
          result.push([sortedNums[i], sortedNums[j], sortedNums[k], sortedNums[l]]);
        }
        if (sum2 > target - sum1) {
          l--;
          continue;
        }
        k++;
      }
    }
  }
  return result;
};
