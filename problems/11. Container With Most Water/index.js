/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = height.length - 1; j < height.length; j--) {
      const width = j - i;
      const length = Math.min(height[i], height[j]);
      const volume = width * length;

      if (volume > max) {
        max = volume;
      }
      if (height[i] <= height[j]) {
        break;
      }
    }
  }
  return max;
};
