class trash {
    constructor(x,y,width,height)
    {
        var options = {restitution: 0.7,friction: 0.01,density: 0.01}
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("trashcan.png")
        World.add(world,this.body)
    }
    
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push(); 
       translate(pos.x,pos.y);
       rotate(angle);
       imageMode(CENTER);
       image(this.image,0,0,this.width,this.height);
       pop();
    
    }
    }
    
    