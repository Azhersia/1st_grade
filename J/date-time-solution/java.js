const dateElement = document.querySelector('#date')
const timeElement = document.querySelector('#time')

update();

setInterval(update, 1000)
function update() {
    const date = new Date();

    dateElement.textContent = date.toLocaleDateString("sv-SE");
    timeElement.textContent = date.toLocaleTimeString("sv-SE");
}
