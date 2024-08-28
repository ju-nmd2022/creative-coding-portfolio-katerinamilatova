function setup() {
  createCanvas(600, 600);
  background(0, 0, 0);
}

let shift = 2;
let cirleSize = 30;
let numCols = 7;
let numRows = 7;
let gap = 40;
let allColors = [
  //colours picked by ChatGPT
  [255, 0, 255], // Magenta
  [255, 105, 180], // Hot Pink
  [0, 255, 255], // Cyan
  [0, 255, 0], // Lime
  [255, 255, 0], // Yellow
  [255, 69, 0], // Red Orange
  [255, 165, 0], // Orange
  [124, 252, 0], // Lawn Green
  [127, 255, 212], // Aquamarine
  [32, 178, 170], // Light Sea Green
  [255, 20, 147], // Deep Pink
  [0, 191, 255], // Deep Sky Blue
  [50, 205, 50], // Lime Green
  [173, 255, 47], // Green Yellow
  [148, 0, 211], // Dark Violet
  [0, 250, 154], // Medium Spring Green
  [240, 128, 128], // Light Coral
  [255, 99, 71], // Tomato
  [255, 182, 193], // Light Pink
  [144, 238, 144], // Light Green
];
const colorsLenght = allColors.length;
let currentColor;
let currentSecondColor;
function pickColor() {
  //chat GPT helped with these 2 lines
  const randomIndex = Math.floor(Math.random() * allColors.length);
  currentColor = allColors[randomIndex];
  const randomIndex2 = Math.floor(Math.random() * allColors.length);
  currentSecondColor = allColors[randomIndex2];
}

function drawCircles(x, y, d, numberOfLines) {
  noFill();
  stroke(currentColor);
  d = cirleSize;
  //following logic is based on coding lessons
  ellipseMode(CENTER);
  for (let i = 0; i < numberOfLines; i++) {
    //Could Garrit explain this line?
    const sizeOfCurrentEllipse = (d / numberOfLines) * i;
    ellipse(x, y, sizeOfCurrentEllipse);
  }
  stroke(currentSecondColor);
  for (let i = 0; i < numberOfLines; i++) {
    const sizeOfCurrentEllipse = (d / numberOfLines) * i;
    ellipse(x - shift, y - shift, sizeOfCurrentEllipse);
  }
}

function draw() {
  let startX = 90;
  let startY = 90;
  frameRate(8);
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      //has to be here to be called everytime for a new ellipse!
      pickColor();

      let randomPushX = random(-10, 10);
      let randomPushY = random(-10, 10);

      let x = startX + col * (cirleSize + gap) + randomPushX;
      let y = startY + row * (cirleSize + gap) + randomPushY;

      // Draw each circle with its unique settings
      drawCircles(x, y, cirleSize, 12);
    }
  }
}
