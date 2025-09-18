import { addScore } from './high-scores.js';
const overlayElement = document.querySelector('.overlay');
const titleElement = document.querySelector('.title');
const scoreElement = document.querySelector('.score-element');
export function makeEndScreenVisible(score) {
    overlayElement.classList.remove('invisible');
    let isHighScore = addScore(score);
    if (isHighScore)
        titleElement.innerHTML = 'New High Score!';
    scoreElement.innerHTML = `Your Score: ${score}`;
}
