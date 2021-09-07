class Mountain {
    constructor(mountain) {
        this.mt = mountain;
        this.x = 0;
        this.y = 0;
        this.vel = 0;
        this.acc = 0;
        this.top = 300;
        this.counter = 0;
        this.distance = game_w/9;
    }
    draw() {
        image(this.mt,this.x,this.y);
    }
    update() {
        // console.log("x = " + this.x);
        if (this.counter > 100)
        {
            if (this.x > this.distance || this.x < 0)
            {
                this.x = (this.acc<0)? 0 : this.distance;
                this.vel = 0 , this.acc = 0;
            }
            // this.direction = 1 * ((deltaTime>40)? (34/100): (deltaTime/100)); //sometimes delta gets too big decrease so just add 0.34 instead.
            this.vel += this.acc * ((deltaTime>40)? (34/100) : (deltaTime/100));
            this.x += this.vel;
            this.counter = 0;
        }
        this.counter += deltaTime;
    }
    moveRight() {
        this.acc = 1;
    }
    moveLeft() {
        this.acc = -1;
    }
    moveCenter() {
        
    }
}
