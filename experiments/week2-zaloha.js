// function setup() {
//   createCanvas(600, 900);
//   background(255, 240, 240);
// }

// let shift = 2;
// let numCols = 20;
// let numRows = 20;
// let gap = 25;

// let noiseScale = 0.01;
// let points = [];

// function draw() {
//   let startX = (width - gap * numCols) / 2;
//   let startY = (height - gap * numRows) / 2;

//   // Initialize the points in the grid
//   for (let row = 0; row < numRows; row++) {
//     for (let col = 0; col < numCols; col++) {
//       let randomPushX = random(-2, 2);
//       let randomPushY = random(-2, 2);

//       let x = startX + col * gap + randomPushX;
//       let y = startY + row * gap + randomPushY;

//       points.push(createVector(x, y));
//     }
//   }

//   // Draw and move the points with Perlin noise
//   for (let i = 0; i < points.length; i++) {
//     stroke(0, 20, 200);
//     strokeWeight(1);

//     let pt = points[i];
//     point(pt.x, pt.y);

//     // Apply Perlin noise to move the point
//     let n = noise(pt.x * noiseScale, pt.y * noiseScale);
//     let angle = 2 * PI * n;
//     pt.x += cos(angle);
//     pt.y += sin(angle);
//   }
//   //   noLoop();
// }

// function setup() {
//   createCanvas(600, 900);
//   background(255, 240, 240);
//   noLoop(); // Prevent looping to ensure only one line is drawn per point
// }

// let numCols = 20;
// let numRows = 20;
// let gap = 25;

// let noiseScale = 0.01;
// let points = [];

// function draw() {
//   background(255, 240, 240); // Clear the background

//   let startX = (width - gap * numCols) / 2;
//   let startY = (height - gap * numRows) / 2;

//   // Initialize the points in the grid
//   for (let row = 0; row < numRows; row++) {
//     for (let col = 0; col < numCols; col++) {
//       let randomPushX = random(-2, 2);
//       let randomPushY = random(-2, 2);

//       let x = startX + col * gap + randomPushX;
//       let y = startY + row * gap + randomPushY;

//       points.push(createVector(x, y));
//     }
//   }

//   // Draw a single line from each point
//   for (let i = 0; i < points.length; i++) {
//     let pt = points[i];

//     // Determine the direction of the line using Perlin noise
//     let n = noise(pt.x * noiseScale, pt.y * noiseScale);
//     let angle = 2 * PI * n;

//     // Randomize the length of the line
//     let lineLength = random(5, 20);

//     // Calculate the end position of the line
//     let endX = pt.x + cos(angle) * lineLength;
//     let endY = pt.y + sin(angle) * lineLength;

//     // Draw the line
//     stroke(0, 20, 200);
//     strokeWeight(2); // Adjust the stroke weight if needed
//     line(pt.x, pt.y, endX, endY);
//   }
// }
