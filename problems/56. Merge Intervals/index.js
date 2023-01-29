/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  result.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    const [startA, endA] = result.pop();
    const [startB, endB] = intervals[i];
    if (endA >= startB) {
      result.push([startA, Math.max(endA, endB)]);
    } else {
      result.push([startA, endA]);
      result.push([startB, endB]);
    }
  }
  return result;
};
