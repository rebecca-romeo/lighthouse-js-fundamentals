// Declaring and Calling Functions Assignment

// isEven function
const isEven  = function (num) {
  return num % 2 === 0;
}

// unecessary to store in variables: 
// const tenIsEven = isEven(10);
// const elevenIsEven = isEven(11);

// instead just call the functions: 
console.log(isEven(100)); // returns true
console.log(isEven(21)); // returns false