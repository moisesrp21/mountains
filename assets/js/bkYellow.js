class BkYellow {
    constructor() {
        this.width = game_w/3;
        this.height = game_h;
        this.x = -this.width;
        this.y = 0;
        this.counter = 0;
        this.goingRight = true;
    }

    draw() {
        fill(color(236,216,156,76));
        rect(this.x,this.y,this.width,this.height);
    }

    update() {
        if (this.counter >= 50) {
            if (this.goingRight) {
                this.x += 1 * ((deltaTime>40)? (66/100) : (deltaTime/50));
                if ((this.x+this.width) >= game_w)
                    this.goingRight = false;
            }
            else {
                this.x += -1 * ((deltaTime>40)? (66/100) : (deltaTime/50));
                if (this.x <= -this.width)
                    this.goingRight = true;
            }
            this.counter = 0;
        }
        this.counter += deltaTime;
    }
}
