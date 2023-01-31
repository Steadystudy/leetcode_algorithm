/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const newInt = [...intervals, newInterval].sort((a, b) => a[0] - b[0]);
  const result = [];
  result.push(newInt[0]);
  for (let i = 1; i < newInt.length; i++) {
    const [startA, endA] = result.pop();
    const [startB, endB] = newInt[i];
    if (endA >= startB) {
      result.push([startA, Math.max(endA, endB)]);
    } else {
      result.push([startA, endA]);
      result.push([startB, endB]);
    }
  }
  return result;
};
