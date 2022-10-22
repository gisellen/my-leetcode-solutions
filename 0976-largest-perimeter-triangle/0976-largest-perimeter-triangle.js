/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let largestNum = 0;
    nums = nums.sort((a,b) =>{ return a - b})
    console.log(nums)
    for(let i = 0; i < nums.length-2; i++){
        if(nums[i] + nums[i+1] > nums[i+2] && nums[i+2] + nums[i] > nums[i+1] && nums[i+2] + nums[i+1] > nums[i]){
            if(largestNum < nums[i] + nums[i+1] + nums[i+2]) largestNum = nums[i] + nums[i+1] +nums[i+2]
        }
    }
    return largestNum
};