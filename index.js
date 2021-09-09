let song;
let sliderVolume;
let sliderRate; // speed
let sliderPan; // from right ear to left
let button; // from right ear to left
let jumpButton; // from right ear to left

// function preload() {
//     song = loadSound('springtide.mp3');
// }

function setup() {
    createCanvas(200, 200);
    button = createButton('play');
    button.mousePressed(togglePlaying);

    jumpButton = createButton('jump');
    jumpButton.mousePressed(jumpSong);

    song = loadSound('springtide.mp3', loaded); // not preload
    song.setVolume(0.5); // from 0 to 1
    // slider = createSlider(0, 1, 0.5, 0.01);
    sliderVolume = createSlider(0, 1, 0.5, 0.01); // from 0 to 1
    sliderRate = createSlider(0, 3, 1, 0.01);
    sliderPan = createSlider(-1, 1, 0, 0.01);
    // song.play(); // not preload
    // song.stop(); // info
    // song.loop(); // info

    // song.addCue(5, changeBackground);
    song.addCue(2, changeBackground, color(0, 0, 255)); // blue color
    song.addCue(4, changeBackground, color(0, 255, 255)); // cian color
    song.addCue(6, changeBackground, color(255, 255, 255)); // white color
}

function changeBackground(color) {
    // background(random(255), random(255), random(255));
    background(color);
}

function jumpSong() {
    const len = song.duration();
    const t = random(len);
    // song.jump(len / 2);
    // song.jump(20); // 20 sec
    song.jump(t);
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
    // background(0);
    song.setVolume(sliderVolume.value());
    song.rate(sliderRate.value());
    song.pan(sliderPan.value());

    // if (song.currentTime() > 5) {
    //     background(255, 0, 255); // pinkish
    // }
    // background(song.currentTime() * 10, 0, 255);
}
