function createTargets(number) {
    for (let i = 0; i < number; i++) {
        const target = document.createElement('div')
        target.classList.add('target')
        target.setAttribute('id', 'score')
        target.setAttribute('onclick', 'countScore()')
        target.style.left = Math.floor(Math.random() * (window.innerWidth - 100)) + 'px'
        target.style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + 'px'
        document.body.appendChild(target)

        target.addEventListener('click', onTargetClicked)
    }
}
createTargets(10)


function onTargetClicked(e) {
    document.body.removeChild(e.target)
}

let score = 0;
const showScore = document.getElementById('score')
console.log(showScore);

function countScore() {
    score++;
    console.log(score)
    showScore.textContent = score;
}