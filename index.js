// console.log("Hello World!");

// Favorite Colors
// Create and modify an array of colors
// Create an array called "colors" that contain the strings "red", "orange", "yellow", "green", "blue", "purple"
let colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// Print the colors array to the console
console.log(colors);

// Use the shift()method to remove the first element from the array and store it in a variable called "firstColor"
let firstColor = colors.shift();

// Use the pop() method to remove the last element from the array and store it in a variable called "lastColor".
let lastColor = colors.pop();

// Log the colors array to the console and note how it changed.
console.log(colors);

// Use the push() method to add the string "pink" to the end of the array.
colors.push("pink");

// Use the unshift() method to add the string "brown" to the beginning of the array.
colors.unshift("brown");

// Use the slice() method to create a new array called "newColors" that contains the second, third, and fourth elements of the original array.
let newColors = colors.slice(1, 4);
console.log(newColors);

// Use the join() method to combine the elements of the newColors array into a single string separated by commas.
let joinedColors = newColors.join(", ");
console.log(joinedColors);

// Try passing a string as an argument into .join(), and see what the result is.

// Create a new variable called colorsCopy. Use the spread operator (...) to create a copy of “colors”. Print the result to the console.

// JavaScript Objects
// Create and modify an Object that stores information about a person.
// First, create an object called "person" with the following properties: "name" (a string), "age" (a number), and "favoriteColors" (an array of strings).
// Print the person object to the console
// Access the "name" property of the object and store it in a variable called "name".
// Access the "age" property of the object and store it in a variable called "age".
// Access the "favoriteColors" property of the object and store it in a variable called "favoriteColors".
// Print the name, age, and favoriteColors variables to the console.
// Add a new property to the person object called favoriteFood and assign it “pizza.”
// Use the delete operator to remove “favoriteColors” from the person object.
// Create a newPerson variable. Using the spread operator (...) make a copy of “person” and assign the value to newPerson.
// Change the name and age properties on newPerson to something different.
// Log both objects to the console.

// 	Bonus:
// Use the Object.assign method to reassign multiple values on the object at once. See the docs here.
// Create a method on the object that, when called, will return the person’s name.
// Methods are functions that are assigned to object properties.
// You can use the “this” keyword to refer to the object that the method belongs to.
