const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle;
var rows = [];
var particles = [];
var plinkos = [];
var line;

var rowHeight = 300;

var gameState = "PLAY";

var count = 0;
var score = 0;

function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,20);
  
  
     for (var k = 0; k <=width; k = k + 80) {
       rows.push(new Rows(k, height-rowHeight/2, 10, rowHeight));
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
   background(0);
   Engine.update(engine);
   textSize(35)
   text("Score : "+score,20,40);
   fill("red");
  
   textSize(35)
   text(" 500 ", 5, 550);
   text(" 500 ", 80, 550);
   text(" 500 ", 160, 550);
   text(" 500 ", 240, 550);
   text(" 100 ", 320, 550);
   text(" 100 ", 400, 550);
   text(" 100 ", 480, 550);
   text(" 200 ", 560, 550);
   text(" 200 ", 640, 550);
   text(" 200 ", 720, 550);
  
   console.log(gameState)
   console.log(particle)
   console.log(count)

   ground.display();

   if ( gameState =="END") {
      background("black");
      fill("red");
      textSize(100);
      text("Game Over", 200, 400);
      
   } 

   for(var k = 0; k < plinkos.length; k++) {
      plinkos[k].display();
   }

    if(particle!=null)
    {
      console.log("Yes")
       particle.display();
        
        if (particle.body.position.y>700)
        {
           
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="END";

              }      
              
        }
    }
    

   
    
  
 for (var i = 0; i < rows.length; i++) {
     
    rows[i].display();
  }
  
}


function mouseReleased() {
    if(gameState!=="END") {
        count++;
    particle=new Particle(mouseX, 50, 10);
    }
}


