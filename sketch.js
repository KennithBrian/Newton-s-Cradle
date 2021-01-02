const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(600,25,650,20);

	bob1 = new Bob(600,225,80);
	rope1 = new Rope(bob1.body,roof.body,0,0);

	bob2 = new Bob(520,225,80);
	rope2 = new Rope(bob2.body,roof.body,-80,0);

	bob3 = new Bob(440,255,80);
	rope3 = new Rope(bob3.body,roof.body,-160,0);

	bob4 = new Bob(680,225,80);
	rope4 = new Rope(bob4.body,roof.body,80,0);

	bob5 = new Bob(760,225,80);
	rope5 = new Rope(bob5.body,roof.body,160,0);

	Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
	background('gray');
	
	roof.display();
	bob1.display();
	rope1.display(0);
	bob2.display();
	rope2.display(-80);
	bob3.display();
	rope3.display(-160);
	bob4.display();
	rope4.display(80);
	bob5.display();
	rope5.display(160);
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(bob3.body, bob3.body.position,{x: -70,y: -70});
	}
}