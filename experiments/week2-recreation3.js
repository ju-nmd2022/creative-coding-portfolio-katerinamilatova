function setup() {
  createCanvas(600, 600);
  background(216, 202, 184);
}

let shift = 2;
let numCols = 20;
let numRows = 20;
let gap = 90;

let noiseScale = 0.02;
let points = [];

//The logic is combination of a tutorial, ChatGPT, code from lessons and my previous works
// ChatGPT helped with the smooth curves and adjustements of the perlin noise
//perlin noise is based on the code from this tutorial: https://www.youtube.com/watch?v=sZBfLgfsvSk

function draw() {
  let startX = (width - gap * numCols) / 2;
  let startY = (height - gap * numRows) / 2;

  // Initialize the points in the grid
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      let randomPushX = random(-20, 20);
      let randomPushY = random(-20, 20);

      let x = startX + col * gap + randomPushX;
      let y = startY + row * gap + randomPushY;

      points.push(createVector(x, y));
    }
  }

  // Draw and move the points with Perlin noise
  for (let i = 0; i < points.length; i++) {
    stroke(101, 67, 33);
    strokeWeight(0.5);
    let randomPushUpperLayer = random(-9, 9);

    let pt = points[i];
    point(pt.x, pt.y);

    stroke(159, 135, 109);
    let pt2 = points[i];
    point(pt2.x + randomPushUpperLayer, pt2.y + randomPushUpperLayer);

    // Apply Perlin noise to move the point
    let n = noise(pt.x * noiseScale, pt.y * noiseScale);
    let angle = 2 * PI * n;
    pt.x += cos(angle);
    pt.y += sin(angle);
  }

  //   noLoop();
}
