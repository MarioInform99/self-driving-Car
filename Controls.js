class Controls{
    constructor(){
        //Control de direcciones
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;
        //Cambiaremos de estado al presionar uno de las flechas del 
        //teclado
        //Añadimos un escuchados de teclados
        this.#addKeyboardListeners();
    }
    //Metodo private con #
    #addKeyboardListeners(){
        //En este metdo añadiremos el evento onkeydown se realiza una 
        //accion al presionar una tecla
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;

            }
            //Mostramos el objeto (atributos) en forma de tabla
            console.table(this);
        }
        //Cambiamos de estado al levantar la tecla
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;

            }
            console.table(this);
        }

    }
}