const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;


var world,engine,mConstraint,bob1,bob2,slingshot;

 function setup(){

    canvas=createCanvas(1600,800)
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    }
    
    bob1=new Pendulum(200,20,40,30);
    bob2=new Pendulum(200,50,40,30);
    bob3=new Pendulum(250,80,40,30);
    bob4=new Pendulum(250,80,40,30);
    bob5=new Pendulum(250,80,40,30);
    

    slingshot = new Sling(bob1.body,{x:600, y:200});
    slingshot2 = new Sling(bob2.body,{x:650, y:200});
    slingshot3 = new Sling(bob3.body,{x:700,y:200});
    slingshot4 = new Sling(bob4.body,{x:750,y:200});
    slingshot5 = new Sling(bob5.body,{x:800,y:200});

    mConstraint = MouseConstraint.create(engine,options);
    World.add(world, mConstraint);
 }

 function draw(){
     background(255);

     bob1.display();
     bob2.display();
     bob3.display();
     bob4.display();
     bob5.display();
     slingshot.display();
     slingshot5.display();
     slingshot2.display();
     slingshot3.display();
     slingshot4.display();

    Engine.update(engine);

 }