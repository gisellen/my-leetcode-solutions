/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let mid = Math.floor(nums.length/2);

    while(start < end && end != start + 1){
        if (nums[mid] == target) return mid
        else if (nums[start] == target) return start
        else if (nums[end] == target) return end
            console.log(start)
    console.log(mid)
    console.log(end)
        if(target < nums[mid]){
            console.log("checkpoint 1")
            end = mid - 1
            mid = Math.floor((end + start)/2);
        }
        else if (target > nums[mid]){
            console.log("checkpoint 2")
            start = mid + 1
            mid = Math.floor((end + start)/2);
        }
    }
        console.log(nums[start], " and ", nums[end])
        console.log(start, " and ", end)
    

    if (nums[end] == target) return end
    else if(nums[start] == target) return start
    else if(nums[start] < target && nums[end] > target) return start + 1
    else if (nums[start] > target) return start - 1 < 0 ? 0 : start
    else if (nums[end] < target) return end + 1
    else return 0
};