class Vehiculo{
    private marca: string;
    private modelo: string;
    private patente: string;
    protected cajaCambios: number;
    protected velocidadMax: number;
    public constructor(marca:string,modelo:string,patente:string,cajaCambios:number,velocidadMax:number){
        this.marca=marca;
        this.modelo=modelo;
        this.patente=patente;
        this.cajaCambios= cajaCambios;
        this.velocidadMax = velocidadMax;
    }
    public velMax(){
        this.velocidadMax==200

    }
    public cajaDeCambios(){
        this.cajaCambios ==5
    }
}
class Combi extends Vehiculo{
    private numPuertas: number;
    public constructor(numPuertas:number,marca:string,modelo:string,patente:string,cajaCambios:number,velocidadaMax:number){
        super(marca,modelo,patente,cajaCambios,velocidadaMax);
        this.numPuertas= numPuertas;
    }
   public getnumPuertas():number{
       return this.numPuertas;
   }
    
}
class 