class CrumpledPaper {

        constructor(x, y, radius){
            var crumpledPaper_options = {
                restitution : 0.5, friction : 0.6, density : 1.2
            }

            this.body = Bodies.circle(x, y, radius, crumpledPaper_options);
            this.radius = radius;
            World.add(myWorld, this.body);
            
        }

        display(){
            var pos = this.body.position;
            
            ellipseMode(RADIUS);
            fill("yellow");
            circle(pos.x, pos.y, this.radius);
        }

}