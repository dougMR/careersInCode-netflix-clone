const playPauseBtn = document.getElementById('play-pause-button');
const video = document.getElementById('featured-video');

playPauseBtn.addEventListener('click', toggleVideo );

function toggleVideo () {
    console.log("toggleVideo()");
    if ( video.paused ) {
        // play
        video.play();
        playPauseBtn.classList.add('pause-video');
        playPauseBtn.classList.remove('play-video');
    } else {
        // pause
        video.pause();
        playPauseBtn.classList.remove('pause-video');
        playPauseBtn.classList.add('play-video');
    }
}