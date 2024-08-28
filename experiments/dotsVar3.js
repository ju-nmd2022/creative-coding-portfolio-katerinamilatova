function setup() {
  createCanvas(600, 900);
  background(255, 240, 240);
}

let shift = 10;
let cirleSize = random(1, 3);
let circleTwoSize = random(4, 7);
let numCols = 7;
let numRows = 10;
let gap = 25;
let allColors = [
  //colours picked by ChatGPT
  [70, 130, 180], // Steel Blue
  [100, 149, 237], // Cornflower Blue
  [72, 61, 139], // Dark Slate Blue
  [176, 196, 222], // Light Steel Blue
  [95, 158, 160], // Cadet Blue
  [119, 136, 153], // Light Slate Gray
  [135, 206, 250], // Light Sky Blue
  [25, 25, 112], // Midnight Blue
  [106, 90, 205], // Slate Blue
  [123, 104, 238], // Medium Slate Blue
  [65, 105, 225], // Royal Blue
  [0, 191, 255], // Deep Sky Blue
  [70, 130, 180], // Steel Blue
  [176, 224, 230], // Powder Blue
  [173, 216, 230], // Light Blue
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
  //combination of chatGPT (helped put together, made it work), what we did in class and my input
  // let startX = (width - (cirleSize + gap) * numCols + gap) / 2;
  // let startY = (height - (cirleSize + gap) * numRows + gap) / 2;

  frameRate(150);
  rotate(frameCount * 0.01);

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      //has to be here to be called everytime for a new ellipse!
      pickColor();
      let startX = 300;
      let startY = -300;
      let startTwoX = 300;
      let startTwoY = 500;

      let randomPushX = random(-10, 10);
      let randomPushY = random(-10, 10);

      let x = startX + col * (cirleSize + gap) + randomPushX;
      let y = startY + row * (cirleSize + gap) + randomPushY;

      let twoX = startTwoX + col * (cirleSize + gap) + randomPushX;
      let twoY = startTwoY + row * (cirleSize + gap) + randomPushY;

      // Draw each circle with its unique settings
      drawCircles(x, y, cirleSize, 12);
      drawCircles(twoX, twoY, circleTwoSize, 3);
    }
  }
}
