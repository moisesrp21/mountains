class Mountain {
    constructor(mountain,x,y) {
        this.mt = mountain;
        this.x = x;
        this.y = y;
        this.vel = 0;
        this.counter = 0;
        this.distance = 30;
    }
    draw() {
        image(this.mt,this.x,this.y);
    }
    update() {
        // console.log("x = " + this.x);
        if (this.counter > 100)
        {
            if (this.x > this.distance) {
                    this.x = this.distance;
                    this.vel = 0;
            }
            else if (this.x < -this.distance){
                this.x = -this.distance;
                this.vel = 0;
            }
            this.x += this.vel * ((deltaTime>40)? (34/100) : (deltaTime/100));
        }
        this.counter += deltaTime;
    }
    moveRight() {
        this.vel = 1;
    }
    moveLeft() {
        this.vel = -1;
    }
}
