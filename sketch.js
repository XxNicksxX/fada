var starImg,bgImg;
var star, starBody;
var fada , fadaImg;
var somm

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    somm = loadSound("sound/JoyMusic.mp3");
}



function setup() {
    createCanvas(800, 750);

   somm.play();

   fada = createSprite(100,400)
   fada.addAnimation("fada",fadaImg);
   fada.scale = 0.2

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
 background(bgImg);
 if(keyDown("d")){
 fada.x += 5;

 }
 if(keyDown("a")){
    fada.x += -5;

}
if(keyDown("s")){
    star.x = starBody.position.x;
    star.y = starBody.position.y;
   Matter.Body.setStatic(starBody,false);

}
if(starBody.position.y > 370){
 Matter.Body.setStatic(starBody,true);

}



 drawSprites();
}