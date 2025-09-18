import { score } from './score.js';
import { makeEndScreenVisible } from './end-screen.js';

const timerElement = document.querySelector('.timer') as HTMLParagraphElement;

let timeLeftSeconds = 60;

let intervalId = setInterval(() => {
    timeLeftSeconds -= 1;
    if(timeLeftSeconds == 0) {
        clearInterval(intervalId);
        makeEndScreenVisible(score);
    }
    displayTime();
}, 1000)

function displayTime() {
    timerElement.innerHTML = timeLeftSeconds < 10 ? `0:0${timeLeftSeconds}` : `0:${timeLeftSeconds}`;
}