/**
 * https://leetcode.com/problems/two-sum/
 */

export function twoSum(nums: number[], target: number): number[] {
  for (let outerIndex = 0; outerIndex < nums.length; outerIndex++) {
    for (let innerIndex = 0; innerIndex < nums.length; innerIndex++) {
      // We can't use the same value twice
      if (outerIndex === innerIndex) {
        continue
      }

      if (nums[outerIndex] + nums[innerIndex] === target) {
        // Order does not matter.
        return [outerIndex, innerIndex]
      }
    }
  }

  throw new Error('No matching solution found.')
}
