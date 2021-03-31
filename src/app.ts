let video = (<HTMLVideoElement>document.getElementById("vacVideo"));
let button = (<HTMLButtonElement>document.getElementById("videoBtn"));

const videoPlayPause = (): void => {
    if (video.paused) {
        video.play();
        button.innerHTML = "Pause";
    } else {
        video.pause();
        button.innerHTML = "Play";
    }
}