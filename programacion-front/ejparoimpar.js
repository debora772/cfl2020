let readlinesync = require("readline-sync");
let numero = readlinesync.questionInt ("ingrese el numero");
let resultado;

if(numero !==0){
    resultado = numero %2
    if(resultado== 0)
    console.log(" es munero par");
    else{
        console.log("el numero es impar");
    }
}else{
    console.log("numero no valido");
    while( numero==0);  
}

