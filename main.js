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

function draw(){
    image(video,0,0,600,500);
    fill("lightblue");
    stroke("lightblue");
    circle(rightwristX,rightwristY,20);
    if(rightwristY>0&&rightwristY<=100){
        document.getElementById("speed").innerHTML="Speed=0.5x";
        song.rate(0.5);
    }
    else if(rightwristY>100&&rightwristY<=200){
        document.getElementById("speed").innerHTML="Speed=1x";
        song.rate(1);
    }
    else if(rightwristY>200&&rightwristY<=300){
        document.getElementById("speed").innerHTML="Speed=1.5x";
        song.rate(1.5);
    }
    else if(rightwristY>300&&rightwristY<=400){
        document.getElementById("speed").innerHTML="Speed=2x";
        song.rate(2);
    }
    else if(rightwristY>400&&rightwristY<=500){
        document.getElementById("speed").innerHTML="Speed=2.5x";
        song.rate(2.5);
    }
    if(scoreLeftwrist>0.2){
    circle(leftwristX,leftwristY,20);
    inNumberLeftwristY=Number(leftwristY);
    Remove_decimals=floor(inNumberLeftwristY);
    volume=Remove_decimals/500;
    document.getElementById("volume").innerHTML="Volume= "+volume;
    song.setVolume(volume);
}
}

function preload(){
    sound=loadSound("animals.mp3");
}

function play(){
    sound.play();
}
