// Objects
// =================================
//
// Storing collection of data
// https://javascript.info/objects

let name = "Jonas";
let age = 30;

// uncommon way of creating empty objects
let user = new Object();
// more common way of creating empty objects
let newUser = {};

// objects with data
let newuser = {
    name: "Johnny",
    age: 42,
};

// using data in objects
alert(user.name); // Johnny
alert(user.name); // 42


// adding data to an object
user.isAdming = true; // user { isAdmin: true;}
user.lastName = "Smith"; // user { lastName: "Smith";}


// normal bracket for a multiword key
user["last name"] = "Smith"

user["last name"] // Smith

// removing data from object
delete user.lastName;

// The "for ... in" loop

for (key in object) {
    // loop over every key in object
}

for (let key in user) {
    // keys
    console.log(key); // name, age, isAdmin, 

    // values
    user[key]; // johnny, 42, true
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "UK",
    "2": "USA",
    "3": "Sweden",
    "1": "Finland"
}

for (let code in codes) {
    alert(code) // 1, 3, 2, 44, 41, 49
}

/* Write the code, one line for each action:
1. Create an empty object user.
2. add the propert name with value John
3. add the property surname with value Smith
4. change the value of the name to Pete
5. remove the property Name
*/

// 1
let user = {};

// 2, 3
user.name = "John"
user.Surname = "Smith"

// 4
user.name = "Pete";

// 5

delete user.name;

// write the code to sum all the salaries and store in the variable sum. should be 390 in the example.

let salaries = {
    john: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0;

for (let name in salaries) {
    sum = sum + salaries[name] // 100, 160, 130
    sum += salaries[name] // 100, 160, 130

    alert(sum) // 390
}