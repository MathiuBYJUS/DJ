
song = "";
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
scoreLeftWrist=0;
scoreRighttWrist=0;
function preload()
{
  song=loadSound("Beatles.mp3")  
}

function setup()
{
    canvas= createCanvas(600,600);
    canvas.center(); 

    video = createCapture(VIDEO);
    video.hide();

    poseNet=
    ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded()
{
console.log('poseNetisInitialized');
}

function gotPoses(results)
{
if (results.length>0);

console.log(results);
scoreLeftWrist = result[0].pose.keypoints[9].score;
console.log("scoreLeftWrist = " + scoreLeftWrist);
{
    rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

    leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
  
}
}

function draw()
{
    image(video,0,0,600,600)
    fill("#0431B4");
    stroke("#0431B4");

    if(scoreLeftWrist > 0.2)
    {

    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volumen = remove_decimals/500;
    document.getElementById("volumen").innerHTML = "Volumen=" + volumen;
    song.setVolume(volumen);
}}

function play()
{
    song.play();

}

poseNet=
ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
