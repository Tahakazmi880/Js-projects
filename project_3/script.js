// Get DOM elements
const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause'); // Optional, not used here
const stopBtn = document.getElementById('stop');
const progressBar = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Toggle video play/pause
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update play button icon
function updatePlayIcon() {
    if (video.paused) {
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
}

// Stop the video and reset
function updateStopIcon() {
    video.pause();
    video.currentTime = 0;
    updatePlayIcon(); // Update icon to play
}

// Set video progress from progress bar
function setVideoProgress() {
    video.currentTime = (+progressBar.value / 100) * video.duration;
}

// Update progress bar and timestamp
function updateProgress() {
    if (video.duration) {
        progressBar.value = (video.currentTime / video.duration) * 100;

        let mins = Math.floor(video.currentTime / 60);
        let secs = Math.floor(video.currentTime % 60);

        let totalMins = Math.floor(video.duration / 60);
        let totalSecs = Math.floor(video.duration % 60);

        // Pad with 0 if needed
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) {
            secs = '0' + secs;
        }
        if (totalMins < 10) {
            totalMins = '0' + totalMins;
        }
        if (totalSecs < 10) {
            totalSecs = '0' + totalSecs;
        }

        timestamp.innerHTML = `${mins}:${secs} / ${totalMins}:${totalSecs}`;
    }
}

// Event listeners for video
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon); // Added this!
video.addEventListener('timeupdate', updateProgress);

// Event listeners for buttons
playBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', updateStopIcon);
progressBar.addEventListener('change', setVideoProgress);
