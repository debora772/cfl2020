let base =0; altura=0; area=0; i=1;

calcularAreaTriangulo=(base,altura)=>{
    area=base*altura;
    return area;
}

for(i=0; i<8; i++){
    base= base+1;
    altura= altura+2;
    console.log("para un triangulo base:",base,"y altura:", altura);
    console.log("su area es:",calcularAreaTriangulo(base,altura));
}
