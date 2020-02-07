function setup() {
    createCanvas(200, 200,);
}
function createTile() {
    translate(0, 0,);
    fill('teal');
    rect(0, 0, 200, 200);
    //stroke('white');
    //strokeWeight(3);
    //line(0, 0, 200, 200);
    //line(200, 0, 0, 200);
    noStroke();
    noFill();

    stroke('orange');
    strokeWeight(2);
    circle(150, 150, 150);
    stroke('orange');
    strokeWeight(2);
    circle(50, 150, 150);
    stroke('orange');
    strokeWeight(2);
    circle(150, 50, 150);
    stroke('orange');
    strokeWeight(2);
    circle(50, 50, 150);
}

function draw() {
    createTile();
}