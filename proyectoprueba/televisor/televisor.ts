class Decodificador{
    private estaPrendido: boolean;
    private volumenActual: number;
    private subirCanal: number;
    public constructor(prendido:boolean, volActual:number,canalActual:number,){
        this.volumenActual= volActual;
        this.subirCanal = canalActual;
        this.estaPrendido= prendido;
    }
    prenderApagar():void{
        if(this.estaPrendido)
        this.estaPrendido= false;
        else
        this.estaPrendido=true;
    }
    subirVolumen():void{
        if(this.estaPrendido)
        this.volumenActual= this.volumenActual+1
    }
    bajarVolumen():void{
        if(this.estaPrendido)
        this.volumenActual = this.volumenActual -1
    }
}