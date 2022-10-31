/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let head = 0
    let tail = nums.length - 1

    while(head <= tail){
            let middle = Math.floor((head+tail)/2)
        console.log(head)
        console.log(middle)
        console.log(tail)
        if(nums[middle] == target) return middle
        if(nums[middle] > target) {
            tail = middle - 1
        }
        else {
            head = middle + 1
        }
    }
    return -1
};