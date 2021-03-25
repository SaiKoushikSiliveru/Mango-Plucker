class Boy {
    constructor(x, y,width,height) {
      var options = {
        isStatic:true,
      };
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = width
      this.height=height
      this.image=loadImage("boy.png")
      World.add(world, this.body);
    };
    display(){
      push()
      translate(this.body.position.x,this.body.position.y)
      strokeWeight(5)
      stroke('blue')
      fill('red')
      imageMode(CENTER)
      image(this.image,0,0,214.6,321.6)
      pop()
    };
  };