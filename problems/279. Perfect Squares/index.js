/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n + 1).fill(n + 1);
  const squares = [];
  for (let i = 1; i ** 2 <= n; i++) {
    squares.push(i ** 2);
  }
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    for (const square of squares) {
      if (i - square >= 0) dp[i] = Math.min(dp[i], dp[i - square] + 1);
    }
  }

  return dp[n];
};
