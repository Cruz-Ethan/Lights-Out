import { addScore } from './high-scores.js';

const overlayElement = document.querySelector('.overlay') as HTMLDivElement;
const titleElement = document.querySelector('.title') as HTMLHeadElement;
const scoreElement = document.querySelector('.score-element') as HTMLParagraphElement;


export function makeEndScreenVisible(score: number) {
    overlayElement.classList.remove('invisible');
    let isHighScore = addScore(score);
    if(isHighScore) titleElement.innerHTML = 'New High Score!';
    scoreElement.innerHTML = `Your Score: ${score}`;
}