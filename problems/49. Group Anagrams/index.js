/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashMap = {};
  for (let i = 0; i < strs.length; i++) {
    const a = strs[i].split('').sort().join('');
    if (hashMap.hasOwnProperty(a)) {
      hashMap[a].push(strs[i]);
    } else {
      hashMap[a] = [strs[i]];
    }
  }
  return Object.values(hashMap);
};
