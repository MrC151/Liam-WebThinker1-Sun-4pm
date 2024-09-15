// Function to start the timer
function startTimer(duration, display) {
    var endTime = Date.now() + duration * 1000;

    function updateTimer() {
      var remainingTime = Math.max(0, Math.round((endTime - Date.now()) / 1000));
      var seconds = remainingTime % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      display.textContent = seconds;

      if (remainingTime <= 0) {
        clearInterval(interval);
        alert("Time's up! You are being redirected.");
        window.location.href = 'https://example.com'; // Redirect to a different URL
      } else {
        localStorage.setItem('endTime', endTime);
      }
    }

    var interval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to display the timer immediately
  }

  // Initialize the timer
  window.onload = function () {
    var display = document.querySelector('#timer');
    var savedEndTime = localStorage.getItem('endTime');

    if (savedEndTime) {
      var endTime = parseInt(savedEndTime, 10);
      var remainingTime = Math.max(0, Math.round((endTime - Date.now()) / 1000));

      if (remainingTime <= 0) {
        alert("Time's up! You are being redirected.");
        window.location.href = 'https://example.com'; // Redirect to a different URL
      } else {
        startTimer(remainingTime, display);
      }
    } else {
      // If no timer was saved, start a new timer
      startTimer(10, display); // 10 seconds for example
    }
  };

  // Clear the timer from localStorage when the user is redirected
  window.addEventListener('beforeunload', function() {
    localStorage.removeItem('endTime');
  });