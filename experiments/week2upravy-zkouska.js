function setup() {
  createCanvas(600, 600);
  background(255, 255, 255);
}

let lines = [];
const numberOfLines = 400;
let gap;
const noiseScale = 0.01;

function createLines() {
  stroke(0, 20, 200);
  strokeWeight(5);
  for (let i = 0; i < numberOfLines; i++) {
    lines.push(createVector(random(width), random(height)));
  }
}

function draw() {
  createLines();
  for (let i = 0; i < numberOfLines; i++) {
    createLines();
    let line = lines[i];
    point(line.x, line.y);
    //perlin noise
    let n = noise(line.x * noiseScale, line.y * noiseScale);
    //this is the angle - converting angle into x and y
    let angle = 2 * PI * n;
    line.x += cos(angle);
    line.y += sin(angle);
  }
}
