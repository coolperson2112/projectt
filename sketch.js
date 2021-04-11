var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var gameState = "play"
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white")
 text("Score : "+score,20,30);
  Engine.update(engine);

  fill("white")
  textSize(20)
  text("500", 30, 500)
  text("500", 100, 500)
  text("500", 180, 500)
  text("500", 260, 500)
  text("100", 340, 500)
  text("100", 420, 500)
  text("100", 500, 500)
  text("200", 580, 500)
  text("200", 660, 500)
  text("200", 740, 500)
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if (keyIsDown("32")&&gameState!=="over"){
    if(frameCount%50===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
     console.log(particles)
     
    }
    if (particles.length>6){
      gameState="over"
    }
  }
   
 if (gameState==="over"){
   fill("white")
   text("Game over",350,220)
 }
  for (var j = 0; j < particles.length; j++) {
if (particles[j]!=null){

      particles[j].display();
  
       if (particles[j].body.position.y>760){
         if (particles[j].body.position.x<300){
score=score+500
          particles[j]=null
         }
      }
}
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

     
   }
   
}