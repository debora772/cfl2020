let array=[1,2,3,4,5,6,7,8,9,];
let i=0;
let j=9;
let readlinesync=require("readline-sync")

function invertirArreglo(array){
    
    if(i==0){
        i++
    }else{
        invertirArreglo(array);
        j--
    }
    return invertirArreglo(array);
};

