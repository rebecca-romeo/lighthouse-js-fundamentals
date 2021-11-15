/* Declaring and Calling Functions Assignment */

// Exercise 1: sayHello Function 
const sayHello  = function (name) {
  console.log("Hello " + name);
}

sayHello("Rebecca");
sayHello("Bob");

// console.log
const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

// return
const returnSayHello  = function (name) {
  return "Hi " + name;
}
const greeting = returnSayHello('Marry');

console.log(greeting);
