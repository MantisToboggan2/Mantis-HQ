document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("testButton").addEventListener("click", function() {
        let currentTime = new Date().toLocaleTimeString();
        document.getElementById("timeDisplay").innerText = "Current Time: " + currentTime;
        timeDisplay.classList.add('styled-theme');
    });
});