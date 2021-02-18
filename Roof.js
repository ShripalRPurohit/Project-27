class Roof{

    constructor(x,y,width,height){

        var options={
            isStatic:true,
            friction:0.7,
            density:0.5,
        }

        this.body= Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)

    }


    display(){

        var pos = this.body.position
        fill("grey")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)


    }

}