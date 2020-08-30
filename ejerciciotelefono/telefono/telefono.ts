class Telefono {
    private prendido: boolean;
    private bateriaActual: number;
    protected linternaPrendida: boolean;

    public constructor() {
        this.prendido = true;
        this.bateriaActual = 100;
        this.linternaPrendida = false;
    }
    public mandarMensaje(msg:string,numero:number): void {
        this.prendido=true;
         console.log("mandar mensaje al",12344333);
    }
    public hacerLlamada(numeroTelefono:number): void {
        this.prendido = true;
        console.log("llamar al",numeroTelefono);

    }
    public prenderApagar(): void {

    }
}
class Camara {
    public constructor(){}
     public sacarFotos(): void {
        console.log("clikk");
    }
   
}
class TelefonoConCamara extends Telefono {
     private camara: Camara;

    public constructor() {
     super();
     this.camara = new Camara();
       
    }
    public sacarFotos():void {
        return this.camara.sacarFotos();

    }
}

let telConCamara: TelefonoConCamara = new TelefonoConCamara()
telConCamara.sacarFotos();
telConCamara.prenderApagar();
telConCamara.mandarMensaje("hola",1232222);

let miTelefono:Telefono= new Telefono()
miTelefono.hacerLlamada(26635353553);
miTelefono.mandarMensaje("hola",1211);

let camara:Camara = new Camara()
camara.sacarFotos();
