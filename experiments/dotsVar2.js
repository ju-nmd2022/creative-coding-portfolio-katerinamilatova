function setup() {
  createCanvas(600, 600);
  background(255, 240, 240);
}

let shift = 2;
let cirleSize = 1;
let numCols = 7;
let numRows = 14;
let gap = 25;
let allColors = [
  //colours picked by ChatGPT
  [255, 99, 71], // Tomato Red
  [255, 140, 0], // Dark Orange
  [255, 165, 0], // Orange
  [255, 228, 181], // Light Moccasin
  [255, 218, 185], // Peach Puff
  [255, 182, 193], // Light Pink
  [255, 105, 180], // Hot Pink
  [255, 20, 147], // Deep Pink
  [240, 128, 128], // Light Coral
  [250, 128, 114], // Salmon
  [173, 255, 47], // Green Yellow
  [144, 238, 144], // Light Green
  [60, 179, 113], // Medium Sea Green
  [102, 205, 170], // Medium Aquamarine
  [135, 206, 250], // Light Sky Blue
  [70, 130, 180], // Steel Blue
  [123, 104, 238], // Medium Slate Blue
  [186, 85, 211], // Medium Orchid
  [221, 160, 221], // Plum
  [238, 130, 238], // Violet
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
  let strokeThickness = random(1, 16);
  strokeWeight(strokeThickness);
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
  //combination of chatGPT (helped put together, made it work), what we did in class and my input
  let startX = random(0, 0);
  let startY = random(0, 0);
  frameRate(5);

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      //has to be here to be called everytime for a new ellipse!

      pickColor();
      cirleSize++;
      let randomPushX = random(-60, 10);
      let randomPushY = random(-10, 60);

      let x = startX + col * (cirleSize + gap) + randomPushX;
      let y = startY + row * (cirleSize + gap) + randomPushY;

      drawCircles(x, y, cirleSize, 12, 70);
    }
  }

  if ((cirleSize = 50)) {
    fill(255, 255, 255);
  }
  noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(0, 0, 0);
  vertex(600, 600, 0);
  vertex(600, 0, 0);
  vertex(0, 0, 0);
  endShape();

  // noLoop();
}
