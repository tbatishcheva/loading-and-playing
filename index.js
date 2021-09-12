let song;
let button; // from right ear to left
let amp; // amplitude

function setup() {
    createCanvas(200, 200);

    song = loadSound('springtide.mp3', loaded); // not preload
    song.setVolume(0.3); // from 0 to 1

    amp = new p5.Amplitude();
    // amp.getLevel(); // level of volume

    background(51);
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
    console.log('loaded');
    button = createButton('play');
    button.mousePressed(togglePlaying);
}

function draw() {
    background(51);

    const vol = amp.getLevel();
    const diameter = map(vol, 0, 0.3, 10, 200);

    fill(255, 0, 255);
    // ellipse(width / 2, height / 2, vol * 2000, vol * 2000);
    ellipse(width / 2, height / 2, diameter, diameter);
}
