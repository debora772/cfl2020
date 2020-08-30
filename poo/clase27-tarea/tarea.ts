abstract class Vehiculo{
    protected patente:string;
    private titular : string;
    private modelo: string;
    public constructor(patente:string,titular:string,modelo:string){
        this.patente=patente;
        this.titular= titular;
        this.modelo= modelo;
    }
}