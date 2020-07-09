let readlinesync= require("readline-sync");
let llegadaCole;
console.log("esperando el colectivo");
llegadaCole = readlinesync.question("llego el cole y/n:")
while( llegadaCole == "n"){
    console.log("esperando el cole")
    llegadaCole = readlinesync.question("llego el cole y/n:")

}console.log("llego el cole")