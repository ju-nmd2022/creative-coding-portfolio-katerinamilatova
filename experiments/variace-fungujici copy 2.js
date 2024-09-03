function setup() {
  createCanvas(600, 600);
  background(30, 30, 30);
}

let shift = 2;
let numCols = 20;
let numRows = 20;
let gap = 25;
let cirleSize = 27;

let noiseScale = 0.01;
let points = [];

function draw() {
  let startX = (width - gap * numCols) / 2;
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
    stroke(57, 255, 20);
    strokeWeight(1);
    let randomPushUpperLayer = random(-9, 9);

    let pt = points[i];
    point(pt.x, pt.y);

    stroke(0, 102, 255, 30);
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
