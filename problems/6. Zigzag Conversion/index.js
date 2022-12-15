/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  const map = [...Array(numRows)].map(() => []);
  map[0].push(s[0]);

  let progress = 'up';
  let cur = 1;
  s.split('')
    .splice(1)
    .forEach((str) => {
      map[cur].push(str);

      if (cur === numRows - 1) {
        progress = 'down';
      }
      if (cur === 0) {
        progress = 'up';
      }

      if (progress === 'up') {
        cur++;
      }
      if (progress === 'down') {
        cur--;
      }
    });
  return map.reduce((str, arr) => str + arr.join(''), '');
};
