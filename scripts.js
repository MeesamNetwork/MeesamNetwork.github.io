// scripts.js

// Countdown timer
let timeLeft = 60; // starting time in seconds
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    countdownElement.textContent = `${timeLeft} seconds`;
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timer);
        // Optionally, reset the timer or perform some other action here
        // e.g., reset to 60 seconds and continue countdown
        timeLeft = 60;
        timer = setInterval(updateCountdown, 1000);
    }
}

let timer = setInterval(updateCountdown, 1000);
