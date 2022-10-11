lipsX=0
lipsY=0

function preload(){
lipstick=loadImage("https://i.postimg.cc/26pckm82/lips.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
    
}

function modelLoaded(){
console.log("Model has Loaded!");
}

    function gotPoses(results){
        if(results.length>0){
            console.log(results);
            lipsX=results[0].pose.nose.x-25;
            lipsY=results[0].pose.nose.y+10;
            console.log("lipsX="+results[0].pose.nose.x);
            console.log("lipsY="+results[0].pose.nose.y);
        }
    }
    
    function draw(){
        image(video,0,0,300,300);
        image(lipstick, lipsX, lipsY, 60, 20);

    }
    function take_snapshot(){
    save("LipstickPicture.png");

    }