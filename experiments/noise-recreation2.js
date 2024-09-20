function setup() {
  createCanvas(600, 600);
  frameRate(8);
  background(10, 20, 30);
  devider = random(60, 200);
  synth = new Tone.Synth().toDestination();
}

let gap = 40;
let numRows = 15;
let devider;
let speedOfFallingOfRect = 30;
let rectangles = [];
let synth;

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width + random(1, 10);
    this.height = height + random(1, 10);
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }

  fall() {
    this.y += speedOfFallingOfRect;
  }

  moveToMouse() {
    this.x = mouseX + random(-10, 5);
  }
}

function drawFallingRectangles() {
  let newRect = new Rect(mouseX, 0, 0, 0);
  rectangles.push(newRect);

  for (let i = rectangles.length - 1; i >= 0; i--) {
    rectangles[i].fall();
    rectangles[i].moveToMouse();
    rectangles[i].draw();

    if (rectangles[i].y > height) {
      rectangles.splice(i, 1);
    }
  }
}

let allColors = [
  [255, 99, 71],
  [255, 140, 0],
  [255, 165, 0],
  [255, 228, 181],
  [255, 218, 185],
  [255, 182, 193],
  [255, 105, 180],
  [255, 20, 147],
  [240, 128, 128],
  [250, 128, 114],
  [173, 255, 47],
  [144, 238, 144],
  [60, 179, 113],
  [102, 205, 170],
  [135, 206, 250],
  [70, 130, 180],
  [123, 104, 238],
  [186, 85, 211],
  [221, 160, 221],
  [238, 130, 238],
];

const colorsLength = allColors.length;
let currentColor;
let currentSecondColor;

function pickColor() {
  const randomIndex = Math.floor(Math.random() * allColors.length);
  currentColor = allColors[randomIndex];
}

function pickSecondColor() {
  const randomIndex = Math.floor(Math.random() * allColors.length);
  currentSecondColor = allColors[randomIndex];
}

// Ensure Tone.js starts audio when user interacts -- ChatGPT made this work
function mousePressed() {
  // Start the Tone.js audio context
  Tone.start();
}

function draw() {
  console.log("Draw called");
  pickColor();
  stroke(currentColor);
  strokeWeight(3);
  noFill();

  let startY = (height - (numRows - 1) * gap) / 2;

  noStroke();
  pickSecondColor();
  fill(currentSecondColor);

  mousePressed();

  //chatGPT helped with this line
  let colorIndex = allColors.indexOf(currentColor);

  if (colorIndex === 0) {
    synth.triggerAttackRelease("C4", "8n");
  } else if (colorIndex === 1 || colorIndex === 5 || colorIndex === 9) {
    synth.triggerAttackRelease("G4", "8n");
  } else if (colorIndex === 2 || colorIndex === 6 || colorIndex === 11) {
    synth.triggerAttackRelease("E4", "8n");
  } else if (colorIndex === 3 || colorIndex === 7 || colorIndex === 13) {
    synth.triggerAttackRelease("A4", "8n");
  } else if (colorIndex === 4 || colorIndex === 8 || colorIndex === 16) {
    synth.triggerAttackRelease("D4", "8n");
  }

  drawFallingRectangles();
}

//maxPolyphony
