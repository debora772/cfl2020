let readlinesync = require("readline-sync");
let texto= readlinesync.question("ingrese el texto");
let textoMinuscula = texto.toLowerCase();
let arregloabecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",];
let arregloOcurrencas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let arreglotexto = textoMinuscula.split("");
let letra;
let cantidad;
for (let i = 0; i < arreglotexto.length; i++) {
    if (letra = arreglotexto[i]);
        cantidad = metodo(arreglotexto, arreglotexto.length, letra);
    console.log("la letra",letra,"aparece",cantidad);
}

function metodo(v, l, n){
    let oc = 0;
    for (let i = 0; i < l; i++) {
        if (v[i]) {
            oc++
        }
    }
    return oc++;
}



