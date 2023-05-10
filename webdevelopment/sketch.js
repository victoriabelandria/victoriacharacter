//The setup function only happens once
function setup() {
	createCanvas(1300, 600); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(37, 150, 190);
  stroke(255, 255, 127);
  strokeWeight(5);
  fill(255, 255, 127, 150);
  ellipse(width/2, height/2.07, 150, 150);

    // Add text to the background
  textSize(50);
  textAlign(100, 150);
  fill(200);
  text("my favorite teacher:", width/2, height/4);


  // Add a happy face
  textSize(147); // set the font size for the happy face
  textAlign(CENTER, CENTER); // center the text horizontally and vertically
  text("\u{1F600}", width/2, height/2); // display the Unicode happy face character

  // Add a triangle for the body
  fill(255, 255, 127);
  stroke(255, 255, 127);
  strokeWeight(5);
  triangle(width/2 - 40, height/2 + 120, width/2 + 40, height/2 + 120, width/2, height/2 + 80);
}
