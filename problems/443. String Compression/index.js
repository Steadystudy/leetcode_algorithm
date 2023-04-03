/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let str = '';
  let char = chars[0];
  let count = 0;

  for (let i = 0; i < chars.length + 1; i++) {
    if (chars[i] === char) {
      count++;
      continue;
    }
    if (count === 1) {
      str += char;
    } else {
      str += char + count;
    }
    char = chars[i];
    count = 1;
  }

  for (let i = 0; i < str.length; i++) {
    chars[i] = str[i];
  }

  return str.length;
};
