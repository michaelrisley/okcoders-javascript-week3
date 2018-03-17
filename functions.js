// (1) a good function takes an input and gives an output, without modifying the input

// function sayhi(name, name2) {
// 	return "Hi " + name + " and " + name2
// }

// console.log(sayhi("Zach", "Michael"))

// // (2) for-each function

// function forEach(collection, func) {
// 	for (var i = 0; i < collection.length; i++) {
// 		var result = func(collection[i])
// 		console.log(result)
// 	}
// }

// (3) mapping function which returns a new collection after operatoins completed

var number = [1, 2, 5, 8, 9, 4]

function map(collection, func) {
	var mapped = []
	for (var i = 0; i < collection.length; i++) {
		var result = func(collection[i])
		mapped.push(result)
	}
	return mapped
}

var result = map(number, function(elem) {return elem * elem})

console.log(result)