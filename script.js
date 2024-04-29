/**
 * Lab 7 - Text
 */
let showfirstphrase = true

function setup() {
  createCanvas(640, 240);
  textFont("Source Code Pro");
}

function draw() {
  background(200);
  if (showfirstphrase) {
    textSize(16);
    text("Peeka", 30, 60);
  } else {
    textSize(32);
    text("Boo!", 100, 160);
  }
}

function mousePressed() {
  showfirstphrase = !showfirstphrase
}