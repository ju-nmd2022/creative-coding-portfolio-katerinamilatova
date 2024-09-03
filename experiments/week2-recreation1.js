function setup() {
  createCanvas(600, 900);
  background(10, 25, 47);
}

let shift = 2;
let numCols = 20;
let numRows = 20;
let gap = 25;

let noiseScale = 0.01;
let points = [];

let allColors = [
  //colours picked by ChatGPT
  [127, 255, 212], // Original Aquamarine
  [118, 237, 197], // Shade 1
  [109, 219, 182], // Shade 2
  [100, 200, 166], // Shade 3
  [91, 182, 151], // Shade 4
  [82, 164, 136], // Shade 5
  [73, 146, 121], // Shade 6
  [64, 128, 106], // Shade 7
  [55, 109, 91], // Shade 8
  [46, 91, 76], // Shade 9
  [140, 255, 220], // Brighter Shade 10
  [150, 255, 230], // Brighter Shade 11
];

const colorsLenght = allColors.length;
let currentColor;
function pickColor() {
  //chat GPT helped with these 2 lines
  const randomIndex = Math.floor(Math.random() * allColors.length);
  currentColor = allColors[randomIndex];
}

//The logic is combination of a tutorial, ChatGPT, code from lessons and my previous works
// ChatGPT helped with the smooth curves and adjustements of the perlin noise
//perlin noise is based on the code from this tutorial: https://www.youtube.com/watch?v=sZBfLgfsvSk

function draw() {
  let startX = (width - gap * numCols) / 2 + 30;
  let startY = (height - gap * numRows) / 2;

  // Initialize the points in the grid
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      let randomPushX = random(-2, 2);
      let randomPushY = random(-2, 2);

      let x = startX + col * gap + randomPushX;
      let y = startY + row * gap + randomPushY;

      points.push(createVector(x, y));
    }
  }

  // Draw and move the points with Perlin noise
  for (let i = 0; i < points.length; i++) {
    pickColor();
    stroke(currentColor);
    strokeWeight(0.5);

    let pt = points[i];
    point(pt.x, pt.y);

    // Apply Perlin noise to move the point
    let n = noise(pt.x * noiseScale, pt.y * noiseScale);
    let angle = 2 * PI * n;
    pt.x += cos(angle);
    pt.y += sin(angle);
  }
  // noLoop();
}
