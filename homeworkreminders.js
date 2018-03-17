// this is array syntax
var array = [1, 2, 3, 4]

// this is object syntax
var object = {name: "Michael", favoriteColor: "green"}

// this is an array containing objects, directly and referentially
var arrayobject = [
	object,
	{name: "Zach", favoriteColor: "blue"}
]

// accessing the third integer in the array
console.log(array[2])

// accessing the favoriteColor key out of object
console.log(object.favoriteColor)

// accessing a key off an object reference 
console.log(arrayobject[1].favoriteColor)