// script.js

const clockElement = document.getElementById('clock');
const timezoneSelect = document.querySelectorAll('#timezone-select .dropdown-item');
const formatButton = document.getElementById('toggle-format');

let is12HourFormat = false; // Default to 24-hour format

// Function to update the clock
function updateClock() {
    const activeTimezone = document.querySelector('#timezone-select .dropdown-item.active');
    const timezone = activeTimezone ? activeTimezone.getAttribute('data-value') : 'local';
    
    const now = new Date();
    const options = {
        timeZone: timezone === 'local' ? Intl.DateTimeFormat().resolvedOptions().timeZone : timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: is12HourFormat // Toggle between 12-hour and 24-hour format
    };
    const formatter = new Intl.DateTimeFormat([], options);
    clockElement.textContent = formatter.format(now);

    formatButton.textContent = is12HourFormat ? 'Switch to 24-Hour' : 'Switch to 12-Hour';
    formatButton.classList.toggle('active', is12HourFormat);
}

// Initialize the clock
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

// Handle dropdown selection
timezoneSelect.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        timezoneSelect.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        updateClock();
    });
});

// Toggle between 12-hour and 24-hour format
formatButton.addEventListener('click', () => {
    is12HourFormat = !is12HourFormat;
    updateClock();
});
