let poem = `Orginally from Queens NY, she likes to spend hours at a time in coffee shops, visit cool bars, and play with animals. 
Sharon spent her freshamsn year studing enviornmental science before switching over to study gd. 
She is intrested in the mix disicplines, and her work aims to be inbetween the spaces of art and design. The name Little Sharon refers to the facts that she is very short in height. `
let n = 0
let prevX, prevY
let canvus;
let font;

function setup() {
canvus = createCanvas(windowWidth, windowHeight);
canvus.position(0,0);
canvus.style('z-index', '-1');
 textSize(30)
fill('red')
noStroke()
clear()
}

function preload() {
  font = loadFont('../fonts/Algebra-Regular.otf')
}

function isFarFromLastCharacter() {
  return !prevX || (
    ptDistance(prevX, prevY, mouseX, mouseY) > 10
  )
}

function ptDistance(x, y, otherX, otherY) {
  return Math.sqrt((x - otherX)**2 + (y - otherY)**2)
}

function draw() {
  if (isFarFromLastCharacter()) {
    text(poem[n], mouseX, mouseY)
    n = (n + 1) % poem.length
    prevX = mouseX
    prevY = mouseY
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
clear();}
  }