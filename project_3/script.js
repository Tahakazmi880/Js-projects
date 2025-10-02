//  get dom elements from the html
const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const progressBar = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//  function to toggle the video status
function togglevideostatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function updateplayicon() {
    if (video.paused) {
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
}



function updatestopicon(){
  video.currentTime = 0;
  video.pause();
}

// function to set the video progress
function setvideoprogress(){
   return true;
}

// create function to update the progress
function updateprogress() {
    console.log(video.currentTime);
    
}


// event listeners for the video

// video.addEventListener('click', togglevideostatus);
video.addEventListener('play', updateplayicon);

video.addEventListener('timeupdate', updateprogress);

video.addEventListener('stop', updatestopicon);

// event listeners for the play button
playBtn.addEventListener('click', togglevideostatus);


// event listeners for the stop button
stopBtn.addEventListener('click', updatestopicon);

// event listeners for the progress bar
progressBar.addEventListener('change', setvideoprogress);


