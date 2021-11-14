/* Looping & Repetition Exercise */

/* While Loops */ 

// Example 1: prints "lets dance" 11 times, then prints "until the sun comes up"
const chorus = "Let's dance!";
let repeat = 0;

while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

// Example 2: adds "change key" on sixth print 
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");