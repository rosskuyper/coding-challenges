/**
 * https://leetcode.com/problems/add-two-numbers/
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const nodeVal = (node: ListNode | null) => node?.val || 0

function addRecursive(l1: ListNode | null, l2: ListNode | null, carry: number): ListNode | null {
  // We've reached the end
  if (!l1 && !l2) {
    return carry > 0 ? new ListNode(carry, null) : null
  }

  const currentVal = nodeVal(l1) + nodeVal(l2) + carry

  return new ListNode(currentVal % 10, addRecursive(l1?.next, l2?.next, currentVal >= 10 ? 1 : 0))
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return addRecursive(l1, l2, 0)
}
