let readlinesync= require("readline-sync");
let n= readlinesync.questionInt("ingrese el tamaño del arreglo");
let arreglo= new Array(n);


function invertirArray(arreglo,indiz,indider){
    let aux;
    if(indiz<indider){
        aux=arreglo[indiz];
        arreglo[indiz]=arreglo[indider];
        arreglo[indider]=aux;
        invertirArray(arreglo,indiz+1,indider-1)
    }    
    return invertirArray;
};

 