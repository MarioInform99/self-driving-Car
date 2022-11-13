//Dibujamos con dinámicamente la carretera para el coche
const canvas=document.getElementById('myCanvas');
canvas.width=200;

//Dibujamos el coche
const ctx= canvas.getContext('2d');
const car=new Car(100,100,30,50);

//Animacion para mover el coche
animate();

function animate(){
    car.update();
    canvas.height=window.innerHeight;
    car.draw(ctx);
    //Este metodo llamada a animacion una vez y otra vez 
    //En segundos dando una ilusión de movimiento
    requestAnimationFrame(animate);
}