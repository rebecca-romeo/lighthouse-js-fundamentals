/* Instructions: Change the code pasted from the exercise

Changed code so that both instances are false. Since neither are true, they will not be printed to the console. Only the statement outside of the conditions will be printed, "Now you're ready to go outside" */ 
const raining = false;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


// prints the else statemen because const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

/* 
Question: What does temperature have to be for the program to tell us to pick a scarf? 
Answer: temperature must be less than 0
Question: What about for it to tell us that short sleeves are OK? 
Answer: temperature must be 15 or higher */

const temperature = 15;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


