let readlinesync = require("readline-sync");
let probabilidad = 1;
let contador =1;
let cantidadDados = readlinesync.questionInt("ingrese la cantidad de dados");


while(contador<= cantidadDados){
    probabilidad =probabilidad *(1/6);

    contador= contador + 1
}
 console.log("la probabilidad de sacar 6 es:",probabilidad);