let readlinesync = require("readline-sync");
let numeroIngresado= readlinesync.questionInt("ingrese el numero");

let numMaximo= numeroIngresado;
let numMinimo= numeroIngresado;
while( numeroIngresado !=0){
     if(numeroIngresado>numMaximo){
         numMaximo=numeroIngresado;
     }
     numeroIngresado=readlinesync.questionInt("ingrese el numero");
    if (numeroIngresado <numMinimo){
        numMaximo= numeroIngresado;
    }
}
console.log("el munero mayor es:", numMaximo);
console.log("el numero minimo es:",numMinimo);