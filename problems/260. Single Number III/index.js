/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const map = {};
  const result = [];
  for (const num of nums) {
    map[num] = map[num] ? map[num] + 1 : 1;
  }

  for (const key in map) {
    if (map[key] === 1) result.push(key);
  }

  return result;
};
