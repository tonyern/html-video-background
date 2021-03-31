let video: HTMLVideoElement = document.querySelector("vac-video");
let button: HTMLButtonElement = document.querySelector("videoBtn");

const videoPlayPause = (): void => {
    /*if (video.paused) {
        video.play();
        button.innerHTML = "Pause";
    } else {
        video.pause();
        button.innerHTML = "Play";
    }*/

    //video.pause();
    button.innerHTML = "Play";
}