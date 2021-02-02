var surface,surface2,surface3,surface4;
var ball;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     surface = createSprite(100,580,150,20);
     surface.shapeColor="orange";

     surface2= createSprite(300,580,150,20);
     surface2.shapeColor="blue";

     surface3= createSprite(500,580,150,20);
     surface3.shapeColor="red";
    
     surface4= createSprite(700,580,150,20);
     surface4.shapeColor="green";

     i1 = createSprite(100,575,150,20);
     i1.shapeColor="orange";

     i2= createSprite(300,575,150,20);
     i2.shapeColor="blue";

     i3= createSprite(500,575,150,20);
     i3.shapeColor="red";
    
     i4= createSprite(700,575,150,20);
     i4.shapeColor="green";


    //create box sprite and give velocity
     ball = createSprite(random(20,750),20,20,20);
     ball.velocityX=3.123;
     ball.velocityY=10;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
edge=createEdgeSprites();

    ;

    ball.bounceOff(surface);
    ball.bounceOff(surface3);
    ball.bounceOff(surface4);
    ball.bounceOff(edge);



    //add condition to check if box touching surface and make it box
    if(ball.isTouching(i1)){
ball.shapeColor="orange";
music.play();
    }
    if(ball.isTouching(i2)){
        ball.shapeColor="blue";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();

    }

    if(ball.isTouching(i3)){
        ball.shapeColor="red";
        music.play();

    }
    if(ball.isTouching(i4)){
        ball.shapeColor="green";
        music.play();
    }

    drawSprites();
}
