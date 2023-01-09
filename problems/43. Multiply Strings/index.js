/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  const arr = new Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      arr[i + j + 1] += Number(num1[i]) * Number(num2[j]);
      arr[i + j] += Math.floor(arr[i + j + 1] / 10);
      arr[i + j + 1] %= 10;
    }
  }
  return arr[0] === 0 ? arr.slice(1).join('') : arr.join('');
};
