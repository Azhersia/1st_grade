const prompt = require("prompt-sync")()
let first = parseInt(prompt("give me a number"))
let second = parseInt(prompt("give me a number"))
let third = parseInt(prompt("give me a number"))
let number = first + second + third;

console.log(number)

if (number > 100) {
    return "värdet är för litet";
}
if (number < 100) {
    return "värdet är för stor";
}
if (number == 100) {
    return "yes";
} 