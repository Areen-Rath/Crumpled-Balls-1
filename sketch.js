//Declaring constants for engine, world and bodies.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Declaring variables for engine and world to access it easily.
var myEngine, myWorld;

//Declaring bodies.
var crumpledPaper, bin;
var ground;

function setup(){

    createCanvas(800, 600);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    crumpledPaper = new CrumpledPaper(25, 555, 20);

    bin = new Bin(665, 565, 200, 20);

    ground = new Ground(400, 580, 800, 10);

}

function draw(){

    background(0);

    Engine.update(myEngine);

    crumpledPaper.display();

    bin.display();

    ground.display();

}

function keyPressed(){

    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position, {x : 50, y : -90});
    }

}