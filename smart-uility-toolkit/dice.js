const crypto = require("crypto");

// Dice roll function
function rollDice() {

    //generates random integer between 0 and 5 
    const randomNumber = crypto.randomInt(0, 6);

    // returning a number between 1 and 6
    return randomNumber + 1;
}

// Single dice roll
const result = rollDice();

console.log("Dice Rolled:", result);

// Multiple dice rolls
console.log("\nMultiple Dice Rolls:");

for (let i = 1; i <= 5; i++) {

    console.log(`Roll ${i}:`, rollDice());
}