let readlinesync = require("readline-sync");
let mes = readlinesync.question("ingrese el mes de su compra");
let monto= readlinesync.questionInt("ingrese el monto de su compra");

if( mes == "octubre"){
    console.log("tiene descuento es de:",monto  -(monto * 0.15))
}else [
    console.log("ud no tiene descuento")
]



