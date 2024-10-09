let raindrops = [];
let clouds = [];
let navHeight = 100;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('animation-container');
    background(135, 206, 235);
    
    for (let i = 0; i < 5; i++) {
        clouds.push(new Cloud(random(width), random(navHeight + 20, navHeight + 150), random(100, 200)));
    }
    noLoop();
    setInterval(() => loop(), 500);
}

function draw() {
    background(135, 206, 235);
    
    for (let cloud of clouds) {
        cloud.display();
    }

    for (let drop of raindrops) {
        drop.update();
        drop.display();
    }

    if (frameCount % 5 === 0) {
        raindrops.push(new Raindrop(random(width), 0));
    }

    raindrops = raindrops.filter(drop => drop.y < height);
}

class Raindrop {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = random(4, 10);
    }

    update() {
        this.y += this.speed;
    }

    display() {
        stroke(0, 0, 255);
        strokeWeight(2);
        line(this.x, this.y, this.x, this.y + 10);
    }
}

class Cloud {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    display() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.size, this.size / 2);
        ellipse(this.x - this.size / 2, this.y + 10, this.size / 2, this.size / 3);
        ellipse(this.x + this.size / 2, this.y + 10, this.size / 2, this.size / 3);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
