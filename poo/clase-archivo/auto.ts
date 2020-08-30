import * as ReadlineSync from "readline-sync";
import * as fs from "fs";

class Vehiculos {
    private titular: string
    private patente: string;
    private modelo: string;
    private marca: string;
    public constructor(titular: string, patente: string, modelo: string, marca: string) {
        this.titular = titular;
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
    }
    public getPatente(): string {
        return this.patente;
    }
}
class Moto extends Vehiculos {
    private Cilindrada: number;
    public constructor(titular: string, patente: string, modelo: string, marca: string, cilindrada: number) {
        super(titular, patente, modelo, marca);
        this.Cilindrada = cilindrada;
    }
    public getCilindrada(): number {
        return this.Cilindrada;
    }

}
class Camion extends Vehiculos {
    private longitud: number;
    public constructor(titular: string, patente: string, modelo: string, marca: string, longitud: number) {
        super(titular, patente, modelo, marca);
        this.longitud = longitud;
    }

}
interface Registro {
    buscarPatente(patente: string): number;
    agregarMoto(): void;
    agregarCamion(): void;
    eliminarVehiculo(patente: string): void;
}

class Automotor implements Registro {
    private listaAutos: Vehiculos[];

    public constructor(listado: Vehiculos[]) {
        this.listaAutos = listado;
    }

    public buscarPatente(patente: string): number {
        let posicion: number = -1
        for (let i: number = 0; i < this.listaAutos.length; i++) {
            if (patente == this.listaAutos[i].getPatente()) {
                posicion = i
            }
        }
        return posicion;
    }

    public agregarMoto(): void {
        let titular = ReadlineSync.question("ingrese el nombre del titular");
        let patente = ReadlineSync.question("ingrese la patente");
        let modelo = ReadlineSync.question("ingrese el modelo");
        let marca = ReadlineSync.question("ingrese la marca");
        let cilindrada = ReadlineSync.question("ingrese la cilindrada");

        let motoNuevo: Moto = new Moto(titular, patente, modelo, marca, parseInt(cilindrada));
    }
    public agregarCamion(): void {
        let titular = ReadlineSync.question("ingrese el nombre del titular");
        let patente = ReadlineSync.question("ingrese la patente");
        let modelo = ReadlineSync.question("ingrese el modelo");
        let marca = ReadlineSync.question("ingrese la marca");
        let longitud = ReadlineSync.question("ingrese la longitud");

        let camionNuevo: Camion = new Camion(titular, patente, modelo, marca, parseInt(longitud));
    }

    public eliminarVehiculo(patente: string): void {
        for (let i: number = 0; i < this.listaAutos.length; i++) {
            if (patente == this.listaAutos[i].getPatente()) {
                this.listaAutos.splice(i, 1);
            }
        }
    }
}
let listaVehiculos: string = fs.readFileSync("vehiculos.txt", "utf-8");
let arrayVehiculos: string[] = listaVehiculos.split("\r\n");
function llenarvehiculos(array: string[]): Vehiculos[] {
    let arrayVehiculos: Vehiculos[] = [];
    for (let indice: number = 0; indice < array.length; indice++) {
        let cadena: string[] = array[indice].split(",");
        if (cadena[0] == "camion") {
            let titular: string = cadena[1];
            let patente: string = cadena[2];
            let modelo: string = cadena[3];
            let marca: string = cadena[4];
            let longitud: number = parseInt(cadena[5]);
            arrayVehiculos.push(new Camion(titular, patente, modelo, marca, longitud))
        } else if (cadena[0] == "moto") {
            let titular: string = cadena[1];
            let patente: string = cadena[2];
            let modelo: string = cadena[3];
            let marca: string = cadena[4];
            let cilindrada:number=parseInt(cadena[5]);
            arrayVehiculos.push(new Moto(titular,patente,modelo,marca,cilindrada));
            
        }

    }
    return arrayVehiculos;

}
console.log(llenarvehiculos(arrayVehiculos));