class Car{
    constructor(x,y,width,height){
        //Ajustes de tamaño del coche
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        //Teclados para controlar
        this.controls=new Controls();
        //Control de velocidad
        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=3;
        this.friction=0.05;
        this.angle=0;
    }
    //Usaremos el metodo de actualizacion para mover el coche Y
    update(){
        //Si el estado del atributo es verdadero reducimos 2 posiciones
        if(this.controls.forward){
            this.speed+=this.acceleration;
        }
        if(this.controls.reverse){
            this.speed-=this.acceleration;
        }
        //Implementamos rozamiento del aire y maxima velociadad
        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        if(this.speed<-this.maxSpeed/2){
            this.speed=-this.maxSpeed/2;
        }
        if(this.speed>0){
            this.speed-=this.friction;
        }
        if(this.speed<0){
            this.speed+=this.friction;
        }
        //Friccion igual 0
        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }
        if(this.controls.left){
            this.angle+=0.03;
        }
        if(this.controls.right){
            this.angle-=0.03;
        }
        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;

    }
    //get a Context o el objeto de canvas.getContext
    draw(ctx){
        //Generamos un angulo de rotación
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);
        //Vamos a dibujar un rectangulo
        ctx.beginPath();
        //Empezamos con la localización de X e Y
        ctx.rect(
            //Usaremos X menos el ancho dividido entre dos
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
        
        ctx.restore();
    }
}