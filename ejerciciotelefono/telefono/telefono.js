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
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.prendido = true;
        this.bateriaActual = 100;
        this.linternaPrendida = false;
    }
    Telefono.prototype.mandarMensaje = function (msg, numero) {
        this.prendido = true;
        console.log("mandar mensaje al", 12344333);
    };
    Telefono.prototype.hacerLlamada = function (numeroTelefono) {
        this.prendido = true;
        console.log("llamar al", numeroTelefono);
    };
    Telefono.prototype.prenderApagar = function () {
    };
    return Telefono;
}());
var Camara = /** @class */ (function () {
    function Camara() {
    }
    Camara.prototype.sacarFotos = function () {
        console.log("clikk");
    };
    return Camara;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        var _this = _super.call(this) || this;
        _this.camara = new Camara();
        return _this;
    }
    TelefonoConCamara.prototype.sacarFotos = function () {
        return this.camara.sacarFotos();
    };
    return TelefonoConCamara;
}(Telefono));
var telConCamara = new TelefonoConCamara();
telConCamara.sacarFotos();
telConCamara.prenderApagar();
telConCamara.mandarMensaje("hola", 1232222);
var miTelefono = new Telefono();
miTelefono.hacerLlamada(26635353553);
miTelefono.mandarMensaje("hola", 1211);
var camara = new Camara();
camara.sacarFotos();
