/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length < 1) return 0;
  const set = new Set();
  nums.forEach((num) => set.add(num));
  let max = 1;
  for (let num of set) {
    if (set.has(num - 1)) {
      continue;
    }

    let count = 1;

    while (set.has(num + 1)) {
      count++;
      num++;
    }

    count > max ? (max = count) : max;
  }
  return max;
};
