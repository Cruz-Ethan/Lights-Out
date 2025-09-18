document.querySelectorAll(".home-button").forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = './index.html';
    });
});
document.querySelectorAll(".high-scores-button").forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = './high-scores.html';
    });
});
document.querySelectorAll(".play-button").forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = './game.html';
    });
});
document.querySelectorAll(".practice-button").forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = './practice.html';
    });
});
