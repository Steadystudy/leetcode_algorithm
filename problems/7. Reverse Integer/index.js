/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x < 10 && x > -10) return x;
  const reverse = x.toString().split('').reverse().join('');
  const reverseNumber = x > 0 ? parseInt(reverse) : -1 * parseInt(reverse);
  const maxNumber = Math.pow(2, 31);
  if (reverseNumber >= maxNumber || reverseNumber < -1 * maxNumber) return 0;
  return reverseNumber;
};
