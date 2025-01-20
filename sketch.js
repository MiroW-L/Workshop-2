let counter = 0;
let countInterval = setInterval(makeBlood,
1000);

function setup () {
createCanvas (400, 400); 
  background (220) ;

setTimeout (makeBlood, 2000, random(0,width), random(0,height), 30, color(255,0,0));
  
}

function makeBlood(xPos, yPos, size, colour) {
  fill(colour);
  noStroke () ;
  circle(xPos, yPos, size);
  triangle(xPos,yPos,xPos+25,yPos-20,xPos+50,yPos);
  counter++;
    setTimeout (makeBlood, 2000, random(0,width), random(0,height), 30, color(255,0,0));
  if (counter >5){
clearInterval (countInterval);
}
    
function mousePressed () {
set.Interval (makeBlood, 1000);

 }
rect(10,10,10,10)
}

// function makeBlood(xPos,random [width], yPos(random (height), size(), colour(); {
// function makeRedSquare(){

// fill(255,0, 0);
// rect (random (0,300), random (0,300), 60, 60,90) ; counter++;
// if (counter >5){
// clearInterval (countInterval);
  
//     function makeHouse(xPos, yPos, stories, colour) {
// fill(colour);
// nostroke;
// rect(xPos, yPos, 50, stories);
// triangle(xPos, yPos, xPos + 25, yPos - 20, xPos + 50, yPos) ; 
  // }
