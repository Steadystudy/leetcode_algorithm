/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addStr(li) {
  let cur = li;
  let str = [];
  while (cur) {
    str.push(cur.val);
    cur = cur.next;
  }

  return str.reverse();
}

var addTwoNumbers = function (l1, l2) {
  const a = addStr(l1);
  const b = addStr(l2);
  let node;
  let cur;
  let lift = 0;
  let remain;
  while (a.length || b.length) {
    const endA = a.pop() || 0;
    const endB = b.pop() || 0;
    if (endA + endB + lift >= 10) {
      remain = (endA + endB + lift) % 10;
      lift = 1;
    } else {
      remain = endA + endB + lift;
      lift = 0;
    }
    if (!node) {
      node = new ListNode(remain);
      cur = node;
    } else {
      cur.next = new ListNode(remain);
      cur = cur.next;
    }
  }
  if (lift) cur.next = new ListNode(1);
  return node;
};
