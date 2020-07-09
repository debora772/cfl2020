let readlinesync = require("readline-sync");
let texto = readlinesync.question("ingrese el texto");
let vocales = ["a","e","i","o","u"];
let consonantes= ["b","c","d","f","g","h","j","k"];
let textoMinuscula = texto.toLowerCase();
let arregloTexto=textoMinuscula.split("");
let cantidad;
let letra;
let vocalesTexto=[];
let consonantesTexto=[];
function encontrarVocales(vocales,letras){
    for(let i=0; vocales.length; i++);
        if(vocales==letras[i]);
        vocalesTexto[i]= letras;
        
}
function encontrarConsonantes(consonantes,letras){
    for(let i =0; i<consonantes.length; i++);
      if(consonantes==letras[i]);
        consonantesTexto[i]=letras;
}
console.log("la letra aparece",letra,cantidad);