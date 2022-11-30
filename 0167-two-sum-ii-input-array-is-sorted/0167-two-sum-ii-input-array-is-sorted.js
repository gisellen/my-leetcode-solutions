/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // set index #s
    let start = 0; 
    let end = numbers.length-1
    while(start<end){
        let sum = numbers[start] + numbers[end]
        // console.log(sum)
        if (sum == target) return [start+1, end+1]
        else sum > target ? end-- : start++
    }
    
    return

};