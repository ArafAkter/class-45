var player

var gameState = "play"

function setup(){
  createCanvas(400,400)
player = createSprite(200,200,100,100)
player.shapeColor = "blue"
sprite = createSprite(100,100,60,30)
obstacle1 = createSprite(500,600,30,30)
obstacle2 = createSprite(-100,-200,30,30)
obstacle3 = createSprite(500,-200,30,30)
obstacle4 = createSprite(-100,600,30,30)

obstacle1.shapeColor = "red"
obstacle2.shapeColor = "red"
obstacle3.shapeColor = "red"
obstacle4.shapeColor = "red"
}

function draw(){
  background("cyan")

obstacle1.collide(obstacle2)
obstacle2.collide(obstacle3)
obstacle3.collide(obstacle1)

obstacle2.collide(obstacle1)
obstacle3.collide(obstacle2)
obstacle1.collide(obstacle3)

obstacle4.collide(obstacle1)
obstacle4.collide(obstacle2)
obstacle4.collide(obstacle3)

if(gameState === "play"){
if(keyDown("up")){
  player.y -= 5
}
if(keyDown("down")){
  player.y += 5
}
if(keyDown("left")){
  player.x -= 5
}
if(keyDown("right")){
  player.x += 5
}

if(player.isTouching(obstacle1) || player.isTouching(obstacle2)|| player.isTouching(obstacle3)|| player.isTouching(obstacle4)){
gameState = "end"
player.destroy()
}
if(player.x > obstacle1.x - 60 && player.x < obstacle1.x + 60 && player.y < obstacle1.y){
  obstacle1.velocityY = -4.5
}

if(player.x > obstacle1.x - 60 && player.x < obstacle1.x + 60 && player.y > obstacle1.y){
  obstacle1.velocityY = 4.5
}

if(player.y > obstacle1.y - 60 && player.y < obstacle1.y + 60 && player.x < obstacle1.x){
  obstacle1.velocityX = -4.5
}

if(player.y > obstacle1.y - 60 && player.y < obstacle1.y + 60 && player.x > obstacle1.x){
  obstacle1.velocityX = 4.5
}

if(player.x > obstacle1.x - 60 && player.x < obstacle1.x + 60 && player.y < obstacle1.y){
  obstacle1.velocityY = -4.5
}


if(player.x > obstacle2.x - 60 && player.x < obstacle2.x + 60 && player.y < obstacle2.y){
  obstacle2.velocityY = -4.5
}

if(player.x > obstacle2.x - 60 && player.x < obstacle2.x + 60 && player.y > obstacle2.y){
  obstacle2.velocityY = 4.5
}

if(player.y > obstacle2.y - 60 && player.y < obstacle2.y + 60 && player.x < obstacle2.x){
  obstacle2.velocityX = -4.5
}

if(player.y > obstacle2.y - 60 && player.y < obstacle2.y + 60 && player.x > obstacle2.x){
  obstacle2.velocityX = 4.5
}


if(player.x > obstacle3.x - 60 && player.x < obstacle3.x + 60 && player.y < obstacle3.y){
  obstacle3.velocityY = -4.5
}

if(player.x > obstacle3.x - 60 && player.x < obstacle3.x + 60 && player.y > obstacle3.y){
  obstacle3.velocityY = 4.5
}

if(player.y > obstacle3.y - 60 && player.y < obstacle3.y + 60 && player.x < obstacle3.x){
  obstacle3.velocityX = -4.5
}

if(player.y > obstacle3.y - 60 && player.y < obstacle3.y + 60 && player.x > obstacle3.x){
  obstacle3.velocityX = 4.5
}


if(player.x > obstacle4.x - 60 && player.x < obstacle4.x + 60 && player.y < obstacle4.y){
  obstacle4.velocityY = -4.5
}

if(player.x > obstacle4.x - 60 && player.x < obstacle4.x + 60 && player.y > obstacle4.y){
  obstacle4.velocityY = 4.5
}

if(player.y > obstacle4.y - 60 && player.y < obstacle4.y + 60 && player.x < obstacle4.x){
  obstacle4.velocityX = -4.5
}

if(player.y > obstacle4.y - 60 && player.y < obstacle4.y + 60 && player.x > obstacle4.x){
  obstacle4.velocityX = 4.5
}
}


camera.position.x = player.x
camera.position.y = player.y
  drawSprites();
if(gameState === "end"){
  textAlign(CENTER)
  textSize(30)
  fill("darkblue")
  text("GAME OVER!",player.x, player.y)
}

}