
function buscarMax(vector){ 
    let maximo=0; indice =0;
     for(indice; indice <= vector.length; indice++){  
        if(vector[indice] > maximo){ 
            maximo = vector[indice];
        }    
    }
    return maximo;
} 
console.log("el maximo es",buscarMax([12,34,54,22,11]));