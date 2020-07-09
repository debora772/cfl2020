let readlinesync = require("readline-sync");
let longitudDeseada = readlinesync.questionInt("ingrese la longitud");
let numeros = new Array(longitudDeseada)

for(let i=0; i<longitudDeseada; i++){
    numeros[i]= readlinesync.questionInt("ingrese el numero");
}
for(let i=longitudDeseada;i>0; i--){
    console.log(numeros[i]);
}

