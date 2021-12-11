
nose_x=0;
nose_y=0;

function preload(){
clown_nose=loadImage("https://i.postimg.cc/0NhKMxRr/moustache-PNG38.png")
}

function setup(){
 canvas=createCanvas(300,300)
 canvas.center()
 video=createCapture(VIDEO);
 video.size(300,300);
 video.hide();
posenet=ml5.poseNet(video, modelloaded);
posenet.on('pose',gotposes);
}

function modelloaded(){
    console.log("posenet is initialized");

}


function gotposes(results){
    if(results.length > 0){
        console.log(results);
        nose_x=results[0].pose.nose.x-25;
        nose_y=results[0].pose.nose.y-15;
        console.log("nose x="+nose_x);
        console.log("nose y="+nose_y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nose_x,nose_y,55,55);
}

function take_snapshot(){
    save ("selfie.png")
}