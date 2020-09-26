class Bin {

        constructor(x, y, width, height){
            var bin_options = {
                isStatic : true
            }
            
            this.body = Bodies.rectangle(x, y, width, height, bin_options);
            this.width = width;
            this.height = height;
            World.add(myWorld, this.body);
        }

        display(){
            var pos = this.body.position;

            rectMode(CENTER);
            fill("blue");
            noStroke();
            rect(pos.x, pos.y, this.width, this.height);
            rect(575, 525, 20, 100);
            rect(755, 525, 20, 100);
        }

}