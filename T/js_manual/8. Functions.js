// FUNCDTIONS
// ==============


// function declaration

// function showMessage() {
//    alert("Hello everyone!")
// }

// showMessage(); // call function by its name

// Local variables

// function showMessage() {
//     let message = "hello, i'm tucker!"; // local variable
//     alert(message);
// }

// showMessage();

// alert(message) // <-- Error! only works in the function if declared in a function

// Outer variables

// let userName = "John"

//function showMessage() {
//    userName = "Bob";

//    let message = "Hello " + userName;
//    alert(message)

// }

// alert(userName); // John, function not yet called

// showMessage()

// alert(userName) // Bob, function changed it

// Parameters

// function showMessage(from, text) { // parameters: from, text
//     alert(from + ':' + text);
// }

// showMessage("Ann", "Hello") // Ann: hello
// showMessage("Ann", "whats up?") // Ann: whats up

// Default value
// function showMessage(from, text = "no text given") {
//     alert(from + ':' + text)
// }

// showMessage("Ann") // Ann: no text given

// Returninga value

//function sum(a, b) {
//    return a + b;
//}

//let result = sum(1, 3); // 4

// Multiple returns
//function checkAge(age) {
//   if (isNAN(age)) {
//if age is not a number
//       return; // exit function
//   }

//    if (age >= 18) {
//       return true;
//   } else {
//       return false;
//   }
//}

//checkAge(35);

function hello(name) {
    return "hello " + name
}

hello("world") // hello world

const hello = (name) => {
    "hello " + name
}


// Task
const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no()
};