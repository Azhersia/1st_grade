let seconds = 10
document.querySelector('#number').innerText = seconds

setTimeout(counter, 500);

function counter() {
  seconds = seconds - 1
}

for (let i = 0; i < 10; i++) {

}