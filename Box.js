class Box {
    constructor(x, y){
      this.body = Bodies.rectangle(x,y,40,50);
      this.width = 40;
      this.height = 50;
      World.add(world,this.body);
      this.Visibility = 255;
    }
  
    display(){
      console.log(this.body.speed);
      if(this.body.speed<8){
          rect(this.body.position.x,this.body.position.y,this.width,this.height); 
      }
  
      else{
         World.remove(world,this.body);
         pop();
      }
    }
  };