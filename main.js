canvas= document.getElementById("marsSurface");
ctx = canvas.getContext("2d");

rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 90;

background_image ="mars.jpg";
rover_image ="rover.png";

function add(){
    background_imagetag=new Image();
    background_imagetag.onload= uploadbackground;
    background_imagetag.src= background_image;

    rover_imagetag =new Image();
    rover_imagetag.onload = uploadrover;
    rover_imagetag.src = rover_image;

}

function uploadbackground(){
    ctx.drawImage(background_imagetag, 0,0,canvas.width,canvas.height);

}

function uploadrover(){
    ctx.drawImage(rover_imagetag, rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed == "37"){
        left();
        console.log("left");
    }
    if(keypressed == "38"){
        up();
        console.log("up");
    }
    if(keypressed == "39"){
        right();
        console.log("right");
    }
    if(keypressed == "40"){
        down();
        console.log("down");
    }
}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("when up arrow key is pressed, X="+rover_x+", Y="+rover_y);
        uploadbackground();
        uploadrover();
    }

    
}
function down(){
    if(rover_y <= 570){
        rover_y = rover_y +10;
        console.log("when down arrow key is pressed, X="+rover_x+", Y="+rover_y);
        uploadbackground();
        uploadrover();
    }
    
    
}
function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("when left arrow key is pressed, X="+rover_x+", Y="+rover_y);
        uploadbackground();
        uploadrover();
    }
    
    
}
function right(){
    if(rover_x <= 700){
        rover_x = rover_x +10;
        console.log("when right arrow key is pressed, X="+rover_x+", Y="+rover_y);
        uploadbackground();
        uploadrover();
    }
    
    
}
