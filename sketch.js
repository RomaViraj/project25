
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground= new Ground(width/2,670,width,20)

	paper=new Paper(200,450,50)
	//Create the Bodies Here.
	
	leftbody= new Dustbin(900,600,100,0);
	rightbody=new Dustbin(1100,600,200,0)
	basebody= new Dustbin(900,375,300)
	Engine.run(engine);

}

	
  

	


function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);



  ground.display();
  paper.display();

  //leftbody.display();
  //rightbody.display();
  basebody.display();
  text(mouseX+","+mouseY,mouseX,mouseY)


}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-110});
  
	}
}
