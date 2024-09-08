// script.js

// Get references to the button and icon
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const clockElement = document.getElementById('clock');

// Function to toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeIcon.classList.toggle('fa-sun', newTheme === 'light');
    themeIcon.classList.toggle('fa-moon', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
}

// Check for saved theme in localStorage and apply it
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeIcon.classList.toggle('fa-sun', savedTheme === 'light');
    themeIcon.classList.toggle('fa-moon', savedTheme === 'dark');
});

// Add event listener to the toggle button
themeToggleButton.addEventListener('click', toggleTheme);

// Function to update the clock
function updateClock(timezone) {
    axios.get(`https://world-time1.p.rapidapi.com/timezone/${timezone}`, {
        headers: {
            'X-RapidAPI-Host': 'world-time1.p.rapidapi.com',
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY'
        }
    })
    .then(response => {
        const dateTime = new Date(response.data.datetime);
        const hours = String(dateTime.getHours()).padStart(2, '0');
        const minutes = String(dateTime.getMinutes()).padStart(2, '0');
        const seconds = String(dateTime.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    })
    .catch(error => {
        console.error('Error fetching time:', error);
        clockElement.textContent = 'Error';
    });
}

// Fetch user's timezone and update the clock
function fetchTimezoneAndUpdateClock() {
    axios.get('https://ipapi.co/json/')
    .then(response => {
        const timezone = response.data.time_zone.name;
        updateClock(timezone);
    })
    .catch(error => {
        console.error('Error fetching timezone:', error);
        clockElement.textContent = 'Error';
    });
}

// Fetch timezone and initialize the clock
fetchTimezoneAndUpdateClock();
setInterval(fetchTimezoneAndUpdateClock, 60000); // Update every minute
