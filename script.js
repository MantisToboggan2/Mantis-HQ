let timeInterval;
let isDisplaying = false;

document.getElementById('testButton').addEventListener('click', function() {
  const timeDisplay = document.getElementById('timeDisplay');

  if (isDisplaying) {
    // Stop displaying the time
    clearInterval(timeInterval);
    timeDisplay.textContent = '';
    this.textContent = 'Show Current Time';
  } else {
    // Start displaying the time
    updateTime(); // Show the time immediately
    timeInterval = setInterval(updateTime, 1000);
    this.textContent = 'Hide Time';
  }

  isDisplaying = !isDisplaying;
});

function updateTime() {
  const timeDisplay = document.getElementById('timeDisplay');
  const currentTime = new Date().toLocaleTimeString();
  timeDisplay.textContent = currentTime;
}