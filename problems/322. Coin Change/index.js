/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};
