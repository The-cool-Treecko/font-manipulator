x = (screen.width/2)
y = (screen.height/2)-260
x2 = ((screen.height/2)/2)-200
y2 = (screen.height/2)-192

function setup() {
    canvas = createCanvas(460, 460)
    canvas.position(x,y);
    video = createCapture(VIDEO);
    video.position(x2,y2);
    video.size(683,384);
    classifier = ml5.poseNet(video,modelLoaded);
    classifier.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model is Loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}