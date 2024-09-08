// script.js

// DOM elements
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Duration for the countdown (6 minutes in seconds)
const INITIAL_TIME = 360; // 6 minutes

// Function to get the current time remaining from localStorage or initialize it
function getTimeRemaining() {
    const savedTime = localStorage.getItem('countdownTime');
    return savedTime ? parseInt(savedTime, 10) : INITIAL_TIME;
}

// Function to save the current time remaining to localStorage
function saveTimeRemaining(time) {
    localStorage.setItem('countdownTime', time);
}

// Function to update the timer display
function updateTimer() {
    const timeRemaining = getTimeRemaining();
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        // Redirect the user to a different page or perform any action
        window.location.href = 'https://www.google.com/search?q=rick+roll+youtube+link&rlz=1C1ONGR_enSG1064SG1064&oq=rick+roll+youtube+link&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI4ODlqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#'; // Replace with your target URL
    } else {
        saveTimeRemaining(timeRemaining - 1); // Save updated time
    }
}

// Function to start the countdown timer
function startCountdown() {
    // Clear any existing interval
    clearInterval(countdownInterval);

    // Update timer immediately
    updateTimer();

    // Update the timer every second
    countdownInterval = setInterval(updateTimer, 1000);
}

// Initialize the countdown timer
startCountdown();

// Clear the timer if needed (for testing purposes)
// localStorage.removeItem('countdownTime');

