
// Update UTC time dynamically
function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('utcTime').textContent = utcTime;
}

// Initial time display and interval for updates
updateUTCTime();
setInterval(updateUTCTime, 1000); // Update every second