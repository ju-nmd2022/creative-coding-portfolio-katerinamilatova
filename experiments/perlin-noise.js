function setup() {
  createCanvas(600, 600);
  background(255, 255, 255);
}

let lines = [];
const numberOfLines = 400;
let gap;
const noiseScale = 0.01;

function draw() {
  for (let i = 0; i < numberOfLines; i++) {
    stroke(0, 20, 200);
    strokeWeight(5);

    lines.push(createVector(random(width), random(height)));
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
