import {addTwoNumbers, ListNode} from './solution'

const listNodeFromArray = (nums: number[]) => {
  if (nums.length === 0) {
    return null
  }

  const [head, ...tail] = nums

  return new ListNode(head, listNodeFromArray(tail))
}

describe('addTwoNumbers', () => {
  it('Solves example 1', () => {
    const l1 = listNodeFromArray([2, 4, 3])
    const l2 = listNodeFromArray([5, 6, 4])

    const output = listNodeFromArray([7, 0, 8])

    expect(addTwoNumbers(l1, l2)).toEqual(output)
  })

  it('Solves example 2', () => {
    const l1 = listNodeFromArray([0])
    const l2 = listNodeFromArray([0])

    const output = listNodeFromArray([0])

    expect(addTwoNumbers(l1, l2)).toEqual(output)
  })

  it('Solves example 3', () => {
    const l1 = listNodeFromArray([9, 9, 9, 9, 9, 9, 9])
    const l2 = listNodeFromArray([9, 9, 9, 9])

    const output = listNodeFromArray([8, 9, 9, 9, 0, 0, 0, 1])

    expect(addTwoNumbers(l1, l2)).toEqual(output)
  })
})
