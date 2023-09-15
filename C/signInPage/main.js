const signInButton = document.getElementById('signIn')
const form = document.querySelector('form')

signInButton.addEventListener('click', function (event) {
  //   // get from input
  event.preventDefault()

  //const email = document.getElementById('email').value
  checkIfsMatch(form['username'].value, form['password'].value)
  //   console.log(document.getElementById('name').value)
  //   console.log(event.target)
})

function checkIfsMatch(username, password) {
  if (username == userCred.username && password == userCred.password) {
    document.cookie = 'auth=true'
    window.location.href = '/dashboard.html'
  } else {
    console.log('login failed')
  }
}

function checkIfUserLoggedIn() {
  if (document.cookie == "auth=true") {
    window.location.href = '/dashboard.html'
  } else {
    return
  }
}

let userCred = {
  username: 'one',
  password: 'one',
}

checkIfUserLoggedIn()
// internet youtube way
/* let userCred = [
  {
    username: "sam",
    password: "two"
  },
  {
    username: "matt",
    password: "three"
  },
  {
    username: "chris",
    password: "four"
  }

]

function getInfo() {
  let username = document.getElementById('username').value
  let password = document.getElementById('password').value

  for (let i = 0; i < userCred.length; i++) {
    // check is user input matches username and password of a current index of the objPeople array
    if (username == userCred[i].username && password == userCred[i].password) {
      console.log(username + " is logged in!!!")
      // stop the function if this is found to be true
      return
    }
  }
  console.log("incorrect username or password")
} */

