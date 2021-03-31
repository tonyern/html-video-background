var video = document.getElementById("vacVideo");
var button = document.getElementById("videoBtn");
var videoPlayPause = function () {
    if (video.paused) {
        video.play();
        button.innerHTML = "Pause";
    }
    else {
        video.pause();
        button.innerHTML = "Play";
    }
};
