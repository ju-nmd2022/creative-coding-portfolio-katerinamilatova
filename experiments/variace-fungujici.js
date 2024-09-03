function setup() {
  createCanvas(600, 900);
  background(255, 240, 240);
}

let shift = 2;
let numCols = 20;
let numRows = 20;
let gap = 25;

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
    stroke(0, 20, 200);
    strokeWeight(1);

    let pt = points[i];
    point(pt.x, pt.y);

    // Apply Perlin noise to move the point
    let n = noise(pt.x * noiseScale, pt.y * noiseScale);
    let angle = 2 * PI * n;
    pt.x += cos(angle);
    pt.y += sin(angle);
  }
  //   noLoop();
}
