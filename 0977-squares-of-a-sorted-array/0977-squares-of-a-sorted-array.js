/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let newArray = new Array(nums.length)
    let start = 0
    let end = nums.length - 1
    for(let i = end ; i >= 0; i--){
        const sqStart = Math.pow(nums[start], 2)
        const sqEnd = Math.pow(nums[end], 2)
        console.log(sqStart)
        console.log(sqEnd)
        if(sqStart > sqEnd){
            newArray[i] = sqStart
            start++
        } else {
            newArray[i] = sqEnd
            end--
        }
    }

    return newArray
};