// (4) Adding lodash
// then you do _.(whateverfunction) to call the preinstalled lodash functionality

var _ = require("lodash")

// (1) 
// find a function that turns the below into an array by splitting on the comma

var stringWCommas = "1, 2, 3, 7, 8"

var result1 = _.split(stringWCommas,",")

console.log(result1)

// (2) 
// find a function that gives the first elem
// find a function that gives everything but the first elem

var myArray = [1, 2, 4]

var result2a = _.first(myArray)

console.log(result2a)

var result2b = _.slice(myArray, 1)

console.log(result2b)

// (3)
// find a function that gives back unique values from above
// find a function that gives the sum of the above numbers

var dupArray = [1, 1, 1, 3, 3, 5, 5, 7, 8, 9]

var result3a = _.uniq(dupArray)

console.log(result3a)

var result3b = _.sum(dupArray)

console.log(result3b)

// I know that I could log out the results of the lodash functions without first assigning them to variables. 
// I chose to do it this way to make it easier for me to learn