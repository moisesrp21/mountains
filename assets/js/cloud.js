class Cloud {
    constructor(cloud, time) {
        this.cloud = cloud;
        this.counter = 0;
        this.i = 0;
        this.grow = true;
        this.time = time;
        this.top = 30;
    }
    update() {
        // console.log("i = " + this.i + ", delta = " + deltaTime);
        this.counter += deltaTime;
        if (this.counter > this.time) {
            // this.cloud.resize(game_w+this.i,0);
            if (this.grow)
            {
                if (this.i >= this.top)
                    this.grow = false;
                this.direction = 1 * ((deltaTime>40)? (34/100): (deltaTime/100)); //sometimes delta gets too big decrease so just add 0.34 instead.
            }
            else
            {
                if (this.i <=0)
                    this.grow = true;
                this.direction = -1 * ((deltaTime>40)? (34/100) : (deltaTime/100));
            }
            this.i += this.direction;
            this.counter = 0;
        }
    }
    draw() {
        image(this.cloud,this.i,-this.i)
    }
}
