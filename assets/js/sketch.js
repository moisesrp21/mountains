function setup() {
    createCanvas(game_w,game_h);
    if (game_h > game_w)
    {
        m1.mt.resize(game_w,0);
        m2.mt.resize(game_w,0);
        c01.cloud.resize(game_w,0);
        c02.cloud.resize(game_w,0);
        c03.cloud.resize(game_w,0);
        c04.cloud.resize(game_w,0);
        c05.cloud.resize(game_w,0);
        c11.cloud.resize(game_w,0);
        c12.cloud.resize(game_w,0);
        c13.cloud.resize(game_w,0);
        c14.cloud.resize(game_w,0);
        c15.cloud.resize(game_w,0);
    }
    else {
        m1.mt.resize(0,game_h);
        m2.mt.resize(0,game_h);
        c01.cloud.resize(0,game_h);
        c02.cloud.resize(0,game_h);
        c03.cloud.resize(0,game_h);
        c04.cloud.resize(0,game_h);
        c05.cloud.resize(0,game_h);
        c11.cloud.resize(0,game_h);
        c12.cloud.resize(0,game_h);
        c13.cloud.resize(0,game_h);
        c14.cloud.resize(0,game_h);
        c15.cloud.resize(0,game_h);
        
    }
    bkYellow = new BkYellow(0,0);
}

function draw() {
    background(48,44,47);
    noStroke();
    fill(color(102,135,173,76));
    rect(0,game_h/3,game_w,game_h/4);
    fill(color(218,133,83,76));
    rect(0,game_h*2/3,game_w,game_h/4);
    m2.draw();
    c15.draw();
    c14.draw();
    c13.draw();
    c12.draw();
    c11.draw();

    m1.draw();
    c05.draw();
    c04.draw();
    c03.draw();
    c02.draw();
    c01.draw();
    bkYellow.draw();

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
    bkYellow.update();
}
function mouseMoved()  {
    if (mouseX > game_w/2) {
        m1.moveLeft();
        m2.moveLeft();
    }
    else {
        m1.moveRight();
        m2.moveRight();
    }
}
