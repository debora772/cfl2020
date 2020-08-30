"use strict";
var Decodificador = /** @class */ (function () {
    function Decodificador(prendido, volActual, canalActual) {
        this.volumenActual = volActual;
        this.subirCanal = canalActual;
        this.estaPrendido = prendido;
    }
    Decodificador.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Decodificador.prototype.subirVolumen = function () {
        if (this.estaPrendido)
            this.volumenActual = this.volumenActual + 1;
    };
    Decodificador.prototype.bajarVolumen = function () {
        if (this.estaPrendido)
            this.volumenActual = this.volumenActual - 1;
    };
    return Decodificador;
}());
