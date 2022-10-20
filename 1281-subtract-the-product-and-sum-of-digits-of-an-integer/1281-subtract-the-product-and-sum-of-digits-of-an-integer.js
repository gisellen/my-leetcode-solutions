/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0
    let product = 1
    Array.from(n.toString()).map(num => {
        sum += Number(num)
        product *= Number(num)
})
    // console.log(sum)
    // console.log(product)
    return product - sum
};