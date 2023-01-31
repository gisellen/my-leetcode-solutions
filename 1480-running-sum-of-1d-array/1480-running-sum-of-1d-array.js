/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let length = nums.length;
    let sum = 0;
    for(let i = 0; i < length; i++){
        sum = sum + nums[i];
        nums[i] = sum;
    }
    return nums;
};