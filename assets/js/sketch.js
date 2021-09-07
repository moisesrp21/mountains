let m1;
let m2;
let c01;
let c02;
let c03;
let c04;
let c05;
let c11;
let c12;
let c13;
let c14;
let P1;
let P2;
function preload() {
    P1 = game_w*100/3;
    P2 = game_w - P1;
    m1 = new Mountain(loadImage('assets/img/M1.png'));
    m2 = new Mountain(loadImage('assets/img/M2.png'));
    // m2 = loadImage('assets/img/M2.png');
    c01 = new Cloud(loadImage('assets/img/c01.png'),300);
    c02 = new Cloud(loadImage('assets/img/c02.png'),275);
    c03 = new Cloud(loadImage('assets/img/c03.png'),250);
    c04 = new Cloud(loadImage('assets/img/c04.png'),225);
    c05 = new Cloud(loadImage('assets/img/c05.png'),200);
    c11 = new Cloud(loadImage('assets/img/c11.png'),175);
    c12 = new Cloud(loadImage('assets/img/c12.png'),150);
    c13 = new Cloud(loadImage('assets/img/c13.png'),125);
    c14 = new Cloud(loadImage('assets/img/c14.png'),150);
}
function setup() {
    createCanvas(game_w,game_h);
    m1.mt.resize(game_w,0);
    m2.mt.resize(game_w,0);
    // m2.resize(game_w,0);
    c01.cloud.resize(game_w,0);
    c02.cloud.resize(game_w,0);
    c03.cloud.resize(game_w,0);
    c04.cloud.resize(game_w,0);
    c05.cloud.resize(game_w,0);
    c11.cloud.resize(game_w,0);
    c12.cloud.resize(game_w,0);
    c13.cloud.resize(game_w,0);
    c14.cloud.resize(game_w,0);
}

function draw() {
    background(0,0,0);
    // image(m2,0,0);
    m2.draw();
    c13.draw();
    c14.draw();
    c12.draw();
    c11.draw();

    // image(m1,0,0);
    m1.draw();
    c05.draw();
    c04.draw();
    c03.draw();
    c02.draw();
    c01.draw();

    m1.update();
    m2.update();
    c01.update();
    c02.update();
    c03.update();
    c04.update();
    c05.update();
    c11.update();
    c12.update();
    c13.update();
    c14.update();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        console.log("left")
        m1.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
        console.log("right");
        m1.moveRight();
    }
}
