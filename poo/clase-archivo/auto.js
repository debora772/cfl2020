"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ReadlineSync = __importStar(require("readline-sync"));
var fs = __importStar(require("fs"));
var Vehiculos = /** @class */ (function () {
    function Vehiculos(titular, patente, modelo, marca) {
        this.titular = titular;
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
    }
    Vehiculos.prototype.getPatente = function () {
        return this.patente;
    };
    return Vehiculos;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(titular, patente, modelo, marca, cilindrada) {
        var _this = _super.call(this, titular, patente, modelo, marca) || this;
        _this.Cilindrada = cilindrada;
        return _this;
    }
    Moto.prototype.getCilindrada = function () {
        return this.Cilindrada;
    };
    return Moto;
}(Vehiculos));
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(titular, patente, modelo, marca, longitud) {
        var _this = _super.call(this, titular, patente, modelo, marca) || this;
        _this.longitud = longitud;
        return _this;
    }
    return Camion;
}(Vehiculos));
var Automotor = /** @class */ (function () {
    function Automotor(listado) {
        this.listaAutos = listado;
    }
    Automotor.prototype.buscarPatente = function (patente) {
        var posicion = -1;
        for (var i = 0; i < this.listaAutos.length; i++) {
            if (patente == this.listaAutos[i].getPatente()) {
                posicion = i;
            }
        }
        return posicion;
    };
    Automotor.prototype.agregarMoto = function () {
        var titular = ReadlineSync.question("ingrese el nombre del titular");
        var patente = ReadlineSync.question("ingrese la patente");
        var modelo = ReadlineSync.question("ingrese el modelo");
        var marca = ReadlineSync.question("ingrese la marca");
        var cilindrada = ReadlineSync.question("ingrese la cilindrada");
        var motoNuevo = new Moto(titular, patente, modelo, marca, parseInt(cilindrada));
    };
    Automotor.prototype.agregarCamion = function () {
        var titular = ReadlineSync.question("ingrese el nombre del titular");
        var patente = ReadlineSync.question("ingrese la patente");
        var modelo = ReadlineSync.question("ingrese el modelo");
        var marca = ReadlineSync.question("ingrese la marca");
        var longitud = ReadlineSync.question("ingrese la longitud");
        var camionNuevo = new Camion(titular, patente, modelo, marca, parseInt(longitud));
    };
    Automotor.prototype.eliminarVehiculo = function (patente) {
        for (var i = 0; i < this.listaAutos.length; i++) {
            if (patente == this.listaAutos[i].getPatente()) {
                this.listaAutos.splice(i, 1);
            }
        }
    };
    return Automotor;
}());
var listaVehiculos = fs.readFileSync("vehiculos.txt", "utf-8");
var arrayVehiculos = listaVehiculos.split("\r\n");
function llenarvehiculos(array) {
    var arrayVehiculos = [];
    for (var indice = 0; indice < array.length; indice++) {
        var cadena = array[indice].split(",");
        if (cadena[0] == "camion") {
            var titular = cadena[1];
            var patente = cadena[2];
            var modelo = cadena[3];
            var marca = cadena[4];
            var longitud = parseInt(cadena[5]);
            arrayVehiculos.push(new Camion(titular, patente, modelo, marca, longitud));
        }
        else if (cadena[0] == "moto") {
            var titular = cadena[1];
            var patente = cadena[2];
            var modelo = cadena[3];
            var marca = cadena[4];
            var cilindrada = parseInt(cadena[5]);
            arrayVehiculos.push(new Moto(titular, patente, modelo, marca, cilindrada));
        }
    }
    return arrayVehiculos;
}
console.log(llenarvehiculos(arrayVehiculos));
