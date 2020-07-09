let readlinesync= require("readline-sync");
let nombreAlumno = readlinesync.question("ingrese el nombre");
let notaPractica = 0;
let notaProblemas = 0;
let notaTeorica =0;
let notaAlumno;
while(nombreAlumno!= ""){
    console.log("ingrese el nombre:",nombreAlumno);

    notaPractica=readlinesync.questionInt("ingrese la nota");
    notaProblemas= readlinesync.questionInt("ingrese la nota");
    notaTeorica= readlinesync.questionInt("ingrese la nota");

    if(notaPractica==0 || notaProblemas==0|| notaTeorica==0){
        console.log("los datos no son validos");
    }
     let notaAlumno=(((notaPractica*10)+ (notaProblemas*50) + (notaTeorica*40))/100)
      console.log("la nota es:",notaAlumno);

      nombreAlumno=readlinesync.question("ingrese el nombre");
}     