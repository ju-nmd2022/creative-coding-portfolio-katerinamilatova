function setup() {
  createCanvas(600, 680);
  background(0, 0, 0);
}

let xpush = 70;
let ypush = 250;

let allColors = [
  // [48, 25, 52], // Dark Purple
  // [85, 26, 139], // Medium Purple
  // [153, 50, 204], // Dark Orchid
  // [216, 191, 216], // Thistle
  // [255, 215, 0], // Gold
  // [255, 255, 255],
  [0, 0, 0], // Black
  [5, 5, 5],
  [10, 10, 10],
  [15, 15, 15],
  [20, 20, 20],
  [25, 25, 25],
  [30, 30, 30],
  [35, 35, 35],
  [40, 40, 40],
  [45, 45, 45],
  [50, 50, 50],
  [55, 55, 55],
  [60, 60, 60],
  [65, 65, 65],
  [70, 70, 70],
  [75, 75, 75],
  [80, 80, 80],
  [85, 85, 85],
  [90, 90, 90],
  [95, 95, 95],
  [100, 100, 100],
  [105, 105, 105],
  [110, 110, 110],
  [115, 115, 115],
  [120, 120, 120],
  [125, 125, 125],
  [130, 130, 130],
  [135, 135, 135],
  [140, 140, 140],
  [145, 145, 145],
  [150, 150, 150],
  [155, 155, 155],
  [160, 160, 160],
  [165, 165, 165],
  [170, 170, 170],
  [175, 175, 175],
  [180, 180, 180],
  [185, 185, 185],
  [190, 190, 190],
  [195, 195, 195],
  [200, 200, 200],
  [205, 205, 205],
  [210, 210, 210],
  [215, 215, 215],
  [220, 220, 220],
  [225, 225, 225],
  [230, 230, 230],
  [235, 235, 235],
  [240, 240, 240],
  [245, 245, 245],
  [250, 250, 250],
  [255, 255, 255], // White
];

const colorsLenght = allColors.length;
let currentColor = [173, 216, 230];
let currentColorProbability = 0.87;

function pickColor() {
  let randomNumber = random(1);
  if (randomNumber > currentColorProbability) {
    const randomIndex = Math.floor(Math.random() * allColors.length);
    currentColor = allColors[randomIndex];
  }
  return currentColor;
}

function drawLines(x1, y1, x2, y2) {
  stroke(0, 0, 0);
  strokeWeight(1.3);
  stroke(currentColor);
  // x2 = x1 - xpush;
  // y2 = y1 + ypush;
  // y1 = random(10, 20);

  line(x1, y1, x2, y2);
}

function draw() {
  noiseSeed(1);
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 400; col++) {
      pickColor();
      frameRate(1);
      let randomThickness = random(10, 30);
      let startX = random(1, 400);
      let startY = random(1, 490);
      let randomPushY = random(-3, +3);
      let x = startX + col;
      let y = startY + row * randomThickness;
      let fallingY = y++;
      drawLines(x, fallingY, x, fallingY + randomThickness);
      noLoop();
    }
  }
}
