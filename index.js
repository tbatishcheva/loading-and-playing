let song;
let sliderVolume;
let sliderRate; // speed
let sliderPan; // from right ear to left
let button; // from right ear to left

// function preload() {
//     song = loadSound('springtide.mp3');
// }

function setup() {
    createCanvas(200, 200);
    button = createButton('play');
    button.mousePressed(togglePlaying);

    song = loadSound('springtide.mp3', loaded); // not preload
    song.setVolume(0.5); // from 0 to 1
    // slider = createSlider(0, 1, 0.5, 0.01);
    sliderVolume = createSlider(0, 1, 0.5, 0.01); // from 0 to 1
    sliderRate = createSlider(0, 3, 1, 0.01);
    sliderPan = createSlider(-1, 1, 0, 0.01);
    // song.play(); // not preload
    // song.stop(); // info
    // song.loop(); // info
}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        button.html('pause'); // stop
    } else {
        song.pause(); // stop
        button.html('play');
    }
}

function loaded() {
    // song.play();
}

function draw() {
    background(0);
    song.setVolume(sliderVolume.value());
    song.rate(sliderRate.value());
    song.pan(sliderPan.value());
}
