function setup() {
  createCanvas(500, 500);
  background(255, 240, 240);
  noLoop();
}

let numCols = 170;
let numRows = 170;
let gap = 11.5;
let lineWidth = 4.4;

let noiseScale = 0.01;
let points = [];

function draw() {
  background(255, 255, 255);

  let startX = (width - gap * numCols) / 2;
  let startY = (height - gap * numRows) / 2;

  //grid is from my previous works (combination of what we did in lessons + chatGPT)
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      let randomPushX = random(-3.5, 3.5);
      let randomPushY = random(-3.5, 3.5);

      let x = startX + col * gap + randomPushX;
      let y = startY + row * gap + randomPushY;

      points.push(createVector(x, y));
    }
  }

  //The following part is combination of a tutorial, ChatGPT and my work
  // ChatGPT helped with the smooth curves and adjustements of the perlin noise
  //perlin noise is based on the code from this tutorial: https://www.youtube.com/watch?v=sZBfLgfsvSk
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let currentX = pt.x;
    let currentY = pt.y;

    let lineLength = random(3, 30);
    let steps = 100; //I can adjust this to make the curve smoother

    stroke(0, 20, 200);
    strokeWeight(lineWidth);

    for (let j = 0; j < steps; j++) {
      let n = noise(currentX * noiseScale, currentY * noiseScale);
      let angle = 2 * PI * n;

      // Move a small step in the direction of the angle
      let stepSize = lineLength / steps;
      let nextX = currentX + cos(angle) * stepSize;
      let nextY = currentY + sin(angle) * stepSize;

      // Draw a small line segment
      line(currentX, currentY, nextX, nextY);

      // Update the current position
      currentX = nextX;
      currentY = nextY;
    }
  }
}
