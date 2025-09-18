export const highScores = loadScores();

export function addScore(score: number): boolean {
    if(highScores[4] == null) return false;
    if(highScores[4] >= score) return false;
    highScores.push(score);
    highScores.sort((a,b) => b - a);
    highScores.pop();
    saveScores();
    return true;
}

function saveScores() {
    localStorage.setItem('high scores', JSON.stringify(highScores));
}

function loadScores(): number[] {
    return JSON.parse(localStorage.getItem('high scores') || '[0, 0, 0, 0, 0]');
}