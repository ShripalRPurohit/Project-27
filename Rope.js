class Rope{
    constructor(objectA,objectB,offsetX,offsetY){
      this.offsetX=offsetX
      this.offsetY=offsetY
      var options={
          bodyA:objectA,
          bodyB:objectB,
          pointB:{x:this.offsetX,y:this.offsetY},
        
      }  

          this.Rope=Constraint.create(options)
          World.add(world,this.Rope)

    }
    display(){
      var pointA=this.Rope.bodyA.position
      var pB=this.Rope.bodyB.position

      var pointBx = pB.x + this.offsetX
      var pointBy = pB.y + this.offsetY


      strokeWeight(4);
      line(pointA.x,pointA.y,pointBx,pointBy)
     
      
    }
}