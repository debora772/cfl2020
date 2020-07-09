let readlinesync= require("readline-sync");
let dividendo= readlinesync.questionInt("ingrese el dividendo");
let divisor= readlinesync.questionInt("ingrese el divisor");


let esMultiplo=(dividendoFn,divisorFn)=>{
  if(dividendoFn % divisorFn==0){
      return true;
  }else{
    return false;
  }
}
console.log(esMultiplo(dividendo,divisor));