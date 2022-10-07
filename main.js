
song = "";
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
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
{
    rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

    leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
  
}
}

function draw()
{
    image(video,0,0,600,600)
}

function play()
{
    song.play();

}

poseNet=
ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
