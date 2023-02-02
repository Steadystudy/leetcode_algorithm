/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (n === 1 || m === 1) return 1;
  const arr = [...new Array(n)].fill(1);
  let i = 1;
  while (i < m) {
    for (let j = 1; j < arr.length; j++) {
      arr[j] += arr[j - 1];
    }
    i++;
  }
  return arr.pop();
};
