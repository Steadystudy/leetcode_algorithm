/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  if (gas.reduce((acc, cur, i) => (acc += cur - cost[i]), 0) < 0) return -1;

  let [tank, start] = [0, 0];

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
  }
  return start;
};
