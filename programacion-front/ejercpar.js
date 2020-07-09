let readlinesync = require("readline-sync");
let valor = readlinesync.questionInt("ingrese valor");

if(valor ==0){
    console.log("valor ingresado  0")
} if(valor % 2 == 0 ){
    console.log("numero par")
}else {
    console.log("numero impar");
}
