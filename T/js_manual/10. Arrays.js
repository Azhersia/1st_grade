// ARRAYS
// ==========================
// storing collections of data
// https://javascript.info/array

// creating an empty array
let arr = new Array();
let arrr = [];

// creating array with data 
let fruits = ["Apple", "Orange", "plum"];

// accesing data in array
// !! arrays are numbered form 0 and up !!

fruits[0] // apple
fruits[1] // orange
fruits[2] // plum

// replacing an elemnt in an array
fruits[2] = "pear";

// add a one to the array
fruits[3] = "lemon" // ["apple", "orange", "pear", "lemon"]

// total count of the elements in the array

fruits.length // 4

// arrays can hold a mix of values
let ar = ["apple", { name: "john" }, ["plum", ["orange"]], function () { alert("hello!") }]

console.log(ar[1].name) // john

ar[3](); // Hello

// pop

let fruits = ["apple", "orange", "plum"]

alert(fruits.pop()); // removes "plum"

alert(fruits) // apple, orange

// push
fruits.push("Pear");

alert(fruits) // apple, orange, pear

// shift
fruits.shift(); // removes first item in array "apple"

alerts(fruits) // orange, pear

// unshift
fruits.unshift("apple"); // adds apple at the beginning of array

alert(fruits); // apple, orange, pear

// loops
let fruits = ["apple", "orange", "plum"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]) // apple, orange, plum
};

// for.. of
for (let fruit of fruits) {
    console.log(fruits) // apple, orange, plum
}

const items = []

items.push({
    timestamp: "14:35 8.4 2022",
    text: "get the kids",
    done: false
})
items.push({
    timestamp: "3:12 1.12 2020",
    text: "take out the tras",
    done: true
})