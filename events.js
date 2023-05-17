/* AUTHOR: JONATHAN IVANY */

// Events is a core module in javascript that allows you to create and handle custom events within an application.

// To use events you are provided an EventEmitter class which is used to emit an event or listen for one which then triggers the associated block of code

const EventEmitter = require("events"); // Load the built-in 'events' module

const battleEvent = new EventEmitter(); // To emit events we must first create an event instance

// Now we can register listeners for this event
// Register all the listeners for the 'cut-arm-off' event
battleEvent.addListener("cut-arms-off", (limbs) => {
  console.log(
    `You attack the Black Knight\nThe Black Knight shouts: 'Just a flesh wound!' as ${limbs} are hacked off.`
  );
});

battleEvent.addListener("cut-leg-off", (limbs) => {
  console.log(
    `You slash at his leg\nThe Black Knight shouts: 'It's just a scratch!' as ${limbs} are severed.`
  );
});

battleEvent.addListener("cut-legs-off", (limbs) => {
  console.log(
    `The Black Knight hops at you and you take another swing\nThe Black Knight shouts: 'Alright, we'll call it a draw.' as ${limbs} are chopped off.`
  );
});

// Emit the 'cut-arm-off' event multiple times
// Emitting an enent is telling your program something is happening and it will then execute that associated code
// Although this battle was purely comical and automated you can use this module to create events that listen for a submission event on a form element and react that way or have a html game with these event listeners

setTimeout(() => {
  battleEvent.emit("cut-arms-off", "both his arms");
  console.log("...");
}, 1000);

setTimeout(() => {
  battleEvent.emit("cut-leg-off", "one of his legs");
  console.log("...");
}, 3000);

setTimeout(() => {
  battleEvent.emit("cut-legs-off", "his remaining limbs");
  console.log("\nThe Black Knight has been defeated...");
}, 4000);

// Another example of using events is to add two numbers

// Create the add event
const addEvent = new EventEmitter();

// Register a listener for the add event
addEvent.on("add", (num1, num2) => {
  const sum = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
});

// Emit the add event
addEvent.emit("add", 10, 20);

// Register another listener for the multiply event
addEvent.on("multiply", (num1, num2) => {
  const product = num1 * num2;
  console.log(`The product of ${num1} and ${num2} is ${product}.`);
});

// Emit the multiply event
addEvent.emit("multiply", 5, 7);
