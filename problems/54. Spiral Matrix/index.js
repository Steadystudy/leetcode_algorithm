/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  while (matrix.length) {
    const row = matrix.shift();
    result.push(...row);
    for (const arr of matrix) {
      const val = arr.pop();
      if (!val) continue;
      result.push(val);
      arr.reverse();
    }
    matrix.reverse();
  }
  return result;
};
