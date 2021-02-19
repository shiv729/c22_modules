//SHIVANI
const Engine = Matter.Engine; //physics 
const World= Matter.World; //bg world canvas
const Bodies = Matter.Bodies; 

var engine, world;
var object;
var ground;
function setup(){
    //var canvas = createCanvas(400,400);
    createCanvas(400,400);
    //.create(); runs the function Engine
    engine = Engine.create();//engine = Matter.Engine.create();
    world = engine.world;
//CREATING YOUR BODIES
    var object_options ={
        isStatic: true
    }
    var object_opts={
        restitution:1
    }
    //restitution talks about the bounciness-- like a bouncy ball in physics
   object= Bodies.rectangle(20,30,200,20,object_opts);//shape of the object, (dimension x,y,width,height)
    World.add(world,object);//adds your world and your object //world is the physics angine
    ground=Bodies.rectangle(200,380,400,20, object_options);// adding the sprite; instead of draw sprites, 
    //XOBJECT OPTION FOR STATIONARY
    World.add(world, ground);


   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER); //syntax- have to write this to display it
    rect(object.position.x,object.position.y,50,50); //syntax- have to write this to display it x,y,width, height
    rect(ground.position.x,ground.position.y,400,20);// we use other x and y values because 
    //RECT^^^ x and y values are just for show. if the variables x and y is bigger, it will be invisble but that width and height.
    
}
