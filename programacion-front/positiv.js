let readlinesync = require("readline-sync");
let numeroIngresado = readlinesync.questionInt("ingrese el numero");
let numeroPositivo=0;
let total=1;

while(numeroIngresado!=0){
      total = total +1
    if(numeroIngresado > 0){
       numeroPositivo = numeroPositivo + 1
    }
    numeroIngresado= readlinesync.questionInt("ingrese el numero");
};

console.log(" cantidad de numeros positivosingresados",+ numeroPositivo);
console.log("ingreso"+( numeroPositivo/total)*100 + "% numeros positivos");