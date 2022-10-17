/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let length = salary.length
    let min = salary[0]
    let max = salary[0]
    let sum = 0
    
    for(let i = 0; i < length; i++){
        if(min > salary[i]){
            min = salary[i]
        }
        if(max < salary[i]){
            max = salary[i]
        }
        sum += salary[i]
    }
    
    let average = (sum - max - min) / (length-2)
    
    return average
};