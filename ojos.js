let eyeSize = 100;
let pupilSize = 40;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    noStroke();
    background(211, 211, 211); // Gris claro
}

function draw() {
    background(211, 211, 211);

    let eyeX = width / 2;
    let eyeY = height / 2;
    let pupilX = map(mouseX, 0, width, eyeX - 20, eyeX + 20);
    let pupilY = map(mouseY, 0, height, eyeY - 20, eyeY + 20);

    // Ojo izquierdo
    fill(255); // Blanco del ojo
    ellipse(eyeX - 100, eyeY, eyeSize, eyeSize);

    // Pupila del ojo izquierdo
    fill(0); // Pupila negra
    ellipse(pupilX - 100, pupilY, pupilSize, pupilSize);

    // Ojo derecho
    fill(255); // Blanco del ojo
    ellipse(eyeX + 100, eyeY, eyeSize, eyeSize);

    // Pupila del ojo derecho
    fill(0); // Pupila negra
    ellipse(pupilX + 100, pupilY, pupilSize, pupilSize);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
