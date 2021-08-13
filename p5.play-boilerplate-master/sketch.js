var Daniel
var Samantha
var background2
var Status=0
var chickenArray=[]
var lettuceArray=[]
var cheeseArray=[]
var topBunArray=[]
var burgerArray=[]
var burgerIndex=0
var S=0

function setup() {
  createCanvas(displayWidth,displayHeight);
  Daniel = createSprite(displayWidth/1.5, displayHeight/1.5, 50, 50);
  Daniel.addImage(DanielImage)
  Daniel.scale = 0.5
  Samantha = createSprite(displayWidth/2.5, displayHeight/1.5, 50, 50);
  Samantha.addImage(SamanthaImage)
  Samantha.scale = 0.6
 /* chickenfoodgroup = new Group()
  lettucefoodgroup = new Group()
  cheesefoodgroup = new Group()
  topBunfoodgroup = new Group() */
}

function preload(){ 
  DanielImage = loadImage("Images/Daniel.png")
  SamanthaImage = loadImage("Images/Samantha.png")
  BackgroundImage = loadImage("Images/Background.jpg")
  BottomBunImage = loadImage("Images/Bottom Bun.png")
  chickenImage = loadImage("Images/cicken borgir.png")
  lettuceImage = loadImage("Images/lettuce.png")
  cheeseImage = loadImage("Images/cheesza.png")
  topBunImage = loadImage("Images/Top Bun.png") 
}

function topBun(){
  topBunfood = createSprite(random(0,width),-10)
  topBunfood.velocityY = 2
  topBunfood.lifetime = displayHeight/1.5
  topBunfood.addImage(topBunImage)
  topBunfood.scale = 0.75
  topBunfood.setCollider("rectangle",0,100,500,100)
  topBunArray.push(topBunfood)
  
  topBunfood.debug = true
 // topBunfoodgroup.add (topBunfood)
}

function chicken(){
  chickenfood = createSprite(random(0,width),-10)
  chickenfood.setCollider("rectangle",0,10,500,150)
  chickenfood.debug = true
  chickenfood.velocityY = 2
  chickenfood.lifetime = displayHeight*1.5
  // chickenfoodgroup.add (chickenfood)
  chickenArray.push(chickenfood)
  chickenfood.addImage(chickenImage)
  chickenfood.scale = 0.5
}

function lettuce(){
  lettucefood = createSprite(random(0,width),-10)
  lettucefood.velocityY = 2
  lettucefood.lifetime = displayHeight*1.5
  lettucefood.setCollider("rectangle",0,0,lettucefood.width*50,lettucefood.height*25)
  lettuceArray.push(lettucefood)
  lettucefood.addImage(lettuceImage)
  lettucefood.scale = 0.1
  lettucefood.debug = true
 // lettucefoodgroup.add (lettucefood)
}

function cheese(){
  cheesefood = createSprite(random(0,width),-10)
  cheesefood.velocityY = 2
  cheesefood.setCollider("rectangle",0,0,350,125)
  cheesefood.lifetime = displayHeight*1.5
  cheesefood.addImage(cheeseImage)
  cheeseArray.push(cheesefood)
  cheesefood.debug = true
 // cheesefoodgroup.add (cheesefood)
}

function draw() {
  background("purple");
  if(Status==0){
  background(BackgroundImage);
  textSize(100)
  fill ("white")
  stroke ("purple")
  strokeWeight(10)
  text("Choose Character",displayWidth/3,displayHeight/6)
  if(mousePressedOver(Daniel)){
    Samantha.visible = false
    Daniel.x = displayWidth/20
    Daniel.y = displayHeight/1.25
    Status=1
  }
  if(mousePressedOver(Samantha)){
    Daniel.visible = false
    Samantha.x = displayWidth/20
    Samantha.y = displayHeight/1.25
    Status=1
  }
  console.log (Daniel)
  BottomBun = createSprite(displayWidth/2,displayHeight/1.5)
  BottomBun.setCollider("rectangle",0,0,487,64)
  burgerArray.push(BottomBun) 
  BottomBun.debug = true
  BottomBun.visible = false
}    
else if(Status==1){
  background("red")
  BottomBun.visible = true
  BottomBun.x = mouseX
  BottomBun.addImage(BottomBunImage)
burgerArray.push(BottomBun)
  for(var travellingArray=0;travellingArray<chickenArray.length;travellingArray++){
  if(burgerArray[burgerIndex].isTouching(chickenArray[travellingArray])){
    chickenArray[travellingArray].velocityY=0
    chickenArray[travellingArray].x=burgerArray[burgerIndex].x
    burgerIndex++
    S = 1
  }
  }


  for(var travellingArray=0;travellingArray<lettuceArray.length;travellingArray++){
    if(burgerArray[burgerIndex].isTouching(lettuceArray[travellingArray])){
      lettuceArray[travellingArray].velocityY=0
      lettuceArray[travellingArray].x=burgerArray[burgerIndex].x
      burgerIndex++
      S = 2
    }
    }

    for(var travellingArray=0;travellingArray<cheeseArray.length;travellingArray++){
      if(burgerArray[burgerIndex].isTouching(cheeseArray[travellingArray])){
        cheeseArray[travellingArray].velocityY=0
        cheeseArray[travellingArray].x=burgerArray[burgerIndex].x
        burgerIndex++
        S = 3
      }
      }
      
      for(var travellingArray=0;travellingArray<topBunArray.length;travellingArray++){
        if(burgerArray[burgerIndex].isTouching(topBunArray[travellingArray])){
          topBunArray[travellingArray].velocityY=0
          topBunArray[travellingArray].x=burgerArray[burgerIndex].x
          
          burgerIndex++
          S = 4
        }
        }
        for(var travellingArray=0;travellingArray<topBunArray.length;travellingArray++){
        if(BottomBun.isTouching(topBunArray[travellingArray])){
         Status=2
        }
        }

  if (frameCount%240 == 0 && S !=1){
    chicken()
    }
  if (frameCount%120 == 0&& S != 2){
    lettuce()
    }
  if (frameCount%360 == 0&&S!=3){
    cheese()
    }
  if (frameCount%720 == 0&&S!=4){
    topBun()
    }
}
if(Status==2){
  text("GAME OVER", displayWidth/2,displayHeight/2)
  for(var travellingArray=0;travellingArray<chickenArray.length;travellingArray++){
    chickenArray[travellingArray].velocityY=0
  }
  for(var travellingArray=0;travellingArray<lettuceArray.length;travellingArray++){
    lettuceArray[travellingArray].velocityY=0
  }
  for(var travellingArray=0;travellingArray<cheeseArray.length;travellingArray++){
    cheeseArray[travellingArray].velocityY=0
  }
  for(var travellingArray=0;travellingArray<topBunArray.length;travellingArray++){
    topBunArray[travellingArray].velocityY=0
  }


}
  drawSprites();
}

/* 
bottombun-chicken-cheese-lettuce-topbun
bottombun-chicken-lettuce-cheese-topbun
bottombun-cheese-chicken-lettuce-topbun
bottombun-cheese-lettuce-chicken-topbun
bottombun-lettuce-chicken-cheese-topbun
bottombun-lettuce-cheese-chicken-topbun
*/