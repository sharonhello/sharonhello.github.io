let poem = `Orginally from Queens NY, shes likes to spend hours at a time in coffee shops, visit cool bars, and go to artist talks. Sharon spent her freshamsn year studiing enviornmental science before switching over to study gd. She has love for independent publications and paper, and is looking for a more mix discipline approach to design; and also wishes to do more coding in the future. `
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