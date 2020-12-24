var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var backgroundImg;
var divisionHeight=300;
var score =0;
var gameState = "start";
var count = 0;
var turn = 0; 


function preload(){
   backgroundImg = loadImage("g2.jpg");
}

function setup() {
   createCanvas(800, 800);
   engine = Engine.create();
   world = engine.world;
   ground = new Ground(600,height,20,1200);


   for (var k = 0; k <=width; k = k + 80)
    {
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
  background(backgroundImg);

  textSize(20)
  text("Score : "+score,20,30);

  textSize(20)
  text("COUNT : "+count,200,30);
  text("500",25,560);
  text("500",100,560);
  text("500",175,560);
  text("500",250,560);
  text("100",340,560);
  text("100",420,560);
  text("100",500,560);
  text("100",580,560);
  text("200",650,560);
  text("200",740,560);
 
 
  Engine.update(engine);
 
  if ( gameState =="end") {
    fill("red")
    textSize(100);
    text("GameOver", 150, 250);
   
  }
  
   for (var i = 0; i < plinkos.length; i++) 
    {
     plinkos[i].display();
     
   }
 
 
  for (var j = 0; j < particles.length; j++)
   {
     particles[j].display();
   }


   for (var k = 0; k < divisions.length; k++)
    {
     
     divisions[k].display();
   }


   for (var i = 0; i < plinkos.length; i++)
    {
    plinkos[i].display();  
 }


   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;
              

                 if ( count>= 5) gameState ="end";  
                                       
             }


             else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                

                   if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
             {
                   score = score + 200;
                   particle=null;
                

                   if ( count>= 5) 
                   { 
                     gameState ="end"
                   }     
   }
             
       }
 
     }
}

function mousePressed()
{
  if(gameState!=="end")
  {
    
    count++;
    particle = new Particle (mouseX,10,10,10);

  }
}