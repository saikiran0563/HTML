"use strict";

// Use let when a variable needs to be reassigned.
let score = 10;
score += 5;

// Use const when the binding should not be reassigned.
const taxRate = 0.18;
const productPrice = 1000;

// var is shown for comparison with older JavaScript; prefer let or const in new code.
var legacyLabel = "Older style variable";

console.log("Score after update:", score);
console.log("Tax rate:", taxRate);
console.log("Example price:", productPrice);
console.log("Legacy var example:", legacyLabel);

// Open this file in a browser console or run it with Node.js to see the output.
