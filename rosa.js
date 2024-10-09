let flowers = [];
let maxFlowers = 60;
let drawFlowerCount = 0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    background(0, 0, 0);
    noLoop();
}

function draw() {
    if (drawFlowerCount < maxFlowers) {
        drawFlower(random(width), random(height));
        drawFlowerCount++;
        setTimeout(() => loop(), 1000);
        noLoop();
    }
}

function drawFlower(x, y) {
    let petalColor = color(random(255), random(255), random(255));
    let centerColor = color(random(255), random(255), 0);

    fill(petalColor);
  for (let i = 0; i < 6; i++) {
    ellipse(x + cos(TWO_PI * i / 6) * 30, y + sin(TWO_PI * i / 6) * 30, 50, 50);
  }
  

  fill(centerColor);
  ellipse(x, y, 30, 30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}