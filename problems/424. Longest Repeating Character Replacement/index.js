/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0;
  let max = 0;
  let strFreq = 0;
  const hashMap = {};

  for (let right = 0; right < s.length; right++) {
    const str = s[right];
    hashMap[str] = hashMap[str] + 1 || 1;
    strFreq = Math.max(strFreq, hashMap[str]);
    while (right - left + 1 > k + strFreq) {
      hashMap[s[left]] -= 1;
      left++;
    }
    max = Math.max(max, right - left + 1);
  }

  return max;
};
