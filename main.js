var song=""
leftwristX=[0];
rightwristY=[0];
leftwristY=[0];
rightwristX=[0];

function preload(){
song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    sound.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log("poseNet is initialised");
}
function gotPoses(results){
    if(results.lengtht>0){
        console.log(results);
        leftwristX=results[0].pose.leftwrist.x;
        leftwristY=results[0].pose.leftwrist.y;
        rightwristX=results[0].pose.rightwrist.x;
        rightwristY=results[0].pose.righttwrist.y;
        console.log("leftwristX="+leftwristX+"leftwristY="+leftwristY+"rightwristX"+rightwristX+"rightwristY"+rightwristY);
    }
}