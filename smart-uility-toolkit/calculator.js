// Simple command-line calculator in Node.js
const args = process.argv;
// Extracting the operation and numbers from command-line arguments
const operation = args[2];
const num1 = Number(args[3]);
const num2 = Number(args[4]);

// to check whether the user has provided valid inputs or not
if (!operation || isNaN(num1) || isNaN(num2)) {
    console.log("Usage: node calculator.js <operation> <number1> <number2>");
    console.log("Operations: add, subtract, multiply, divide");
    process.exit(1);
}

// Calculator operations
switch (operation) {

    case "add":
        console.log("Result:", num1 + num2);
        break;

    case "subtract":
        console.log("Result:", num1 - num2);
        break;

    case "multiply":
        console.log("Result:", num1 * num2);
        break;

    case "divide":

        if (num2 === 0) {
            console.log("Error: Cannot divide by zero.");
        } else {
            console.log("Result:", num1 / num2);
        }

        break;

    default:
        console.log("Invalid operation.");
        console.log("Use: add, subtract, multiply or divide");
}