let readlinesync = require("readline-sync");

let numero1 = readlinesync.questionInt("ingrese numero");
let numero2 =readlinesync.questionInt("ingrese el numero");
let suma = 0;

if(numero1>numero2){
    let auxiliar= numero1
    numero1=numero2
    numero2=auxiliar
}
for( numero1;numero1<= numero2; numero1 ++ ){
    suma = suma + numero1;
}
   
console.log("la suma es", suma);