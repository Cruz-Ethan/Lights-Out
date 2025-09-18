import { highScores } from "./high-scores.js";
const listElement = document.querySelector('.high-scores-list');
if (listElement) {
    listElement.innerHTML = highScores.reduce((listHTML, score) => {
        return listHTML + `<li>${score}</li>`;
    }, '');
}
