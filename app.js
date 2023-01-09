let clicks = 0;

const TIMEOUT = 5000;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

button.onclick = start;

function start () {
    const startGame = Date.now();

    display.textContent = formatTime(TIMEOUT);
    button.onclick = () =>counter.textContent = clicks++;
    
    const interval = setInterval(() =>{
        const delta = Date.now() - startGame;
        display.textContent = formatTime(TIMEOUT - delta);

    },100)

        const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = 'Игра окончена';

        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT)
}

function formatTime (ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}