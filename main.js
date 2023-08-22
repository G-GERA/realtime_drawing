noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 450);

    canvas = createCanvas(550, 400);
    canvas.position(700, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function modelLoaded()
{
    console.log('PoseNet is initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("rightWristX = " + rightWristX + "leftWristX = " + leftWristX);

    }
}

function draw()
{
    background("#78827a");
    document.getElementById("square_side").innerHTML = "The width and height of the square is = " + difference + "px";
    fill("#8b48f7");
    stroke("#8b48f7");
    square(noseX, noseY, difference);


}