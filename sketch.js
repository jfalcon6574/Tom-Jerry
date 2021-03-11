
var cat
var mouse
var garden
var catimage1,catimage2,catimage3
var mouseimage
var gardenimage
var mouseimage1,mouseimage2,mouseimage3 ;


function preload() {
    //load the images here
     catimage1 = loadAnimation ("images/cat1.png")
     catimage2 = loadAnimation ("images/cat2.png", "images/cat3.png")
     catimage3 = loadAnimation ("images/cat4.png")
     mouseimage1 = loadAnimation ("images/mouse1.png")
     mouseimage2 = loadAnimation ("images/mouse2.png", "images/mouse3.png")
     mouseimage3 = loadAnimation ("images/mouse4.png")
     gardenimage = loadImage ("images/garden.png")
    



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(400,400,50,50)
    garden.addImage (gardenimage)
    cat = createSprite (600,600,50,50)
    cat.addAnimation ("catRunning",catimage1)
    cat.scale = .1
    mouse = createSprite (100,600,50,50)
    mouse.addAnimation ("mouseOpen", mouseimage1)
    mouse.scale = .1
    

}

function draw() {

    background(255);
    if (cat.x - mouse.x < cat.width/2 - mouse.width/2){
        cat.velocityX = 0
        cat.addAnimation ("catlastimage", catimage3)
        cat.x = 300 
        cat.scale = 0.2
        cat.changeAnimation ("catlastimage")
        mouse.addAnimation("mouselastimage", mouseimage3)
        mouse.scale = 0.15
        mouse.changeAnimation ("mouselastimage")
    }
    
    //Write condition here to evalute if tom and jerry collide
    
    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW) {
    cat.velocityX = -5 
   
    cat.addAnimation ("catRunning", catimage2);
    cat.changeAnimation("catRunning")
    mouse.addAnimation ("mouseTeasing", mouseimage2); 
    mouse.frameDelay = 25
    mouse.changeAnimation ("mouseTeasing")
    }

    }

  //For moving and changing animation write code here



