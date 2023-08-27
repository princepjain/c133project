Status = "";
AC_image = "";
objects = [];

function preload(){
    AC_image = loadImage("ac.webp")
}

function setup(){
    canvas = createCanvas(650,375)
    canvas.position(375,150);
    objectdetector = ml5.objectDetector("cocossd", modalloaded)
    document.getElementById("status").innerHTML = "staus: Detecting object";
}


function modalloaded(){
    console.log("modal has been loaded")
    status = true;
    objectdetector.detect(AC_image, gotresults)
    }

    function gotresults(error, results){
    if(error){
        console.log("error")
    }
    else{
        console.log(results)
        objects = results;
    }
    }


    
function draw(){

    image(img,0,0,600,425)
if(status != ""){
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML = "Status: Object Detected";
        name = objects[i].label;
        percent = floor(objects[i].confidence*100);
        fill("red")
        text(name + " "+percent+"%" , objects[i].x+15,objects[i].y+15)
        noFill();
        stroke("red")
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
}
     