const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron,rubber,rubber2,rubber3,rubber4;
var stone;
var iron2,iron3;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(200,200,100,50);
    stone = new Stone(600,200,50,50);
    rubber = new Rubber(400,200,60);
    rubber2 = new Rubber(600,200,50);
    rubber3 = new Rubber(700,200,60);
    rubber4 = new Rubber(500,200,50);
    iron2 = new Iron(900,400,100,50);
    iron3 = new Iron(100,500,100,50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    stone.display();
    rubber.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    iron2.display();
    iron3.display();
    
 
}