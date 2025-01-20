let img; 

function preload(){
  img = loadImage('images/Minutemen.png');
}

let counter = 0;
let countInterval = setInterval(makeBlood,4000);

function setup () {
createCanvas (1200, 1000); 
background (220) ;
setTimeout (makeBlood, 2000, random(0,width), random(0,height), 30, color(255,1,0));
// setTimeout (makeBlood, 2000, random(0,width), random(0,height), 30, color(255,1,0));
 
image(img,0,-70);
img.resize(1,1);
}

// function draw(){
 
 
// }

function makeBlood(xPos, yPos, size, colour) {
  push();
  fill(colour);
  noStroke () ;
  circle(xPos, yPos, size);
  triangle(xPos+13, yPos-4, xPos-14, yPos+7, xPos-4, yPos-91);
  //  circle(xPos-20, yPos-40, size-12);
  //  circle(xPos, yPos+24, size-19);
  counter++;
    setTimeout (makeBlood, 2000, random(0,width), random(0,height), 30, color(255,0,0));
    pop();
  if (counter > 5){
clearInterval (countInterval);

}
    
function mousePressed () {
set.Interval (makeBlood, 1000);

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
  
}