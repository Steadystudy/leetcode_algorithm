/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];

  const dfs = (curCandidates, curTarget, value) => {
    if (curTarget <= 0) return;
    if (curTarget == 0) res.push(value);
    for (let i = 0; i < curCandidates.length; i++) {
      dfs(curCandidates.slice(i), curTarget - curCandidates[i], [...value, curCandidates[i]]);
    }
  };
  dfs(candidates, target, []);
  return res;
};
