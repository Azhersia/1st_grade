// VARIABLES
// variables are used to store information

// LET

let message; // declare variable name message

message = "hello"; // store the string "hello" in the variable named message

alert(message); // shows the variable content 

// can combine the declaration with the named variable

let name = "Kelston";

// declare multiple variables in one line (not recommended)
//short but harder to read
let user = "john", age = 25, city = "Copenhagen";

// longer but easier to read
let nickname = "Azh";
let year = "2000";
let country = "Finland";

// old way of declaring a variable.
// only use let and const.
// let and var is almost the same (small differences).
var candy;

// Example
let height;

height = 35; // value set to 35

height = 92; // value changed, old value deleted
alert(height); // height will show up as 92

// exmaple
let color;
let newcolor;

color = 35;

newcolor = color; // copies 35 into the newcolor variable

color = 92 // valye changed old cata deleted

alert(color); // will show 92
alert(newcolor); // will show 35

// CONSTANTS
// declare variable whos value cant be changed (read only)

const MYBIRTHDAY = "22.7.2006";

MYBIRTHDAY = "01.02.1999"; // error, cannot change the value of a const

// unwritten rule: write all const variables with caps 

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";