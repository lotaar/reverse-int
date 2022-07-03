module.exports = function reverse (n) {
 n = n + ''
 let reverseNumber = n.split('').reverse().join('')
 return parseFloat(reverseNumber)
}
