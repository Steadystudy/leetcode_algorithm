/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    if (!notDuplicate(board[i])) return false;

    const column = [];
    for (let j = 0; j < 9; j++) {
      column.push(board[j][i]);
    }
    if (!notDuplicate(column)) return false;
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const box = [];
      box.push(board[j][i], board[j][i + 1], board[j][i + 2]);
      box.push(board[j + 1][i], board[j + 1][i + 1], board[j + 1][i + 2]);
      box.push(board[j + 2][i], board[j + 2][i + 1], board[j + 2][i + 2]);
      if (!notDuplicate(box)) return false;
    }
  }
  return true;
};

function notDuplicate(array) {
  const a = array.filter((x) => x !== '.');
  if (a.length !== [...new Set(a)].length) {
    return false;
  }
  return true;
}
