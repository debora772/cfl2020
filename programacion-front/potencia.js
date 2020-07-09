let readlinesync= require("readline-sync");
let base= readlinesync.questionInt("ingrese la base");
let exponente = readlinesync.questionInt("ingrese el exponente");


let calcularPotencia= (baseFn, exponenteFn)=>{
let resultado=1;

if(exponenteFn ==0){
    return 1;
}else{
    for( let i=1; i<=exponenteFn; i++){
        resultado= resultado * baseFn;
        
    }
    return resultado;
}
};
console.log("la potencia es:", calcularPotencia( base,exponente));