function preload() {

}

function setup() {

    canvas = createCanvas(700, 540);
    canvas.position(110, 250)
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    rect(40, 30, 600, 480);
    image(video, 70, 75, 540, 390);

    circle(40, 30, 50);
    circle(650, 30, 50);

    circle(40, 500, 50);
    circle(650, 500, 50);
}

function take_snapshot() {
    save("user_name.png");
}