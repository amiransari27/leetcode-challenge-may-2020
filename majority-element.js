/*  
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
Input: [3,2,3]
Output: 3

Example 2:
Input: [2,2,1,1,1,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    let majority = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] == majority) {
            count += 1;
        } else {

            count -= 1;

            if (count == 0) {
                majority = nums[i];
                count = 1;
            }

        }

    }

    return majority;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement2 = function (nums) {
    const hash = {};
    const n = nums.length / 2;

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]] += 1;
            if (hash[nums[i]] > n) {
                return nums[i];
            }
        } else {
            hash[nums[i]] = 1;
        }
    }
}