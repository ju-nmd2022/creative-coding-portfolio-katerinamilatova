console.log(Tone); // Should print the Tone.js object in the console if it's loaded correctly.

let synth;

function setup() {
  createCanvas(600, 600);
  synth = new Tone.Synth().toDestination(); // Initialize synth
}

function draw() {
  if (frameCount % 60 == 0) {
    synth.triggerAttackRelease("C4", "8n"); // Play sound every second
  }
}
