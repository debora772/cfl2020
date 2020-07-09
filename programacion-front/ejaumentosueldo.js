let readlinesync = require("readline-Sync");
let sueldoActual = readlinesync.questionInt("ingrese su sueldo actual");

if(sueldoActual > 25000){
    console.log("ud no tiene aumento")

}else{
    if(sueldoActual <= 15000){
        console.log("su aumento es de:", sueldoActual + (sueldoActual * 0.20))
    }else{
        if(sueldoActual>= 2000){
            console.log("su aumento es de:", sueldoActual+ (sueldoActual * 0.15))
        }else{
            if(sueldoActual <= 2000){
                console.log("su aumento es de:", sueldoActual+ (sueldoActual * 0.05))
            }else{
                
            }
        }
    }
}

    
