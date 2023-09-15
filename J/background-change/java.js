/* btn.addEventListener('click', function onClick(event) {

    document.body.style.backgroundColor = 'red';
    if (document.body.style.backgroundColor = 'red') {
        document.body.style.color = 'white';
    };
}); */

/* const changeColor = document.getElementById('changeColor'),
    colors = ['beige', 'white', 'beige', 'white'];
let colorIndex = 0;

changeColor.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length
});

const d = new Date();
console.log(d)

document.querySelector("h1").innerText = d; */

const button = document.querySelector('button');
const colors = ['white', 'black'];
let index = 0;

button.addEventListener('click', onButtonClick);

function onButtonClick() {
    index++;
    if (index >= colors.length)
        index = 0;
    document.body.style.backgroundColor = colors[index];

    // resets one number to keep track of which color number is displayed
    //document.body.style.backgroundColor = colors[index % colors.length];
}


/* Jimis way of solving
button.addEvenListener('click', () => {
    document.body.style.backgroundColor = colors(colors[++index % colors.length])
})
 */


/*
  "works but there are better way"s -Jimi 

  button.addEventListener('click', onButtonClick);
 
  document.body.style.backgroundColor = 'white';

function onButtonClick() {
    if (document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'red';
    }
    else if (document.body.style.backgroundColor === 'red') {
        document.body.style.backgroundColor = 'yellow';
    }
    else {
        document.body.style.backgroundColor = 'white';
    }

} */

