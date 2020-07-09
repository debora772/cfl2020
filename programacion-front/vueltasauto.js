let readlinesync = require("readline-sync");
let vuelta1 = readlinesync.questionInt("ingrese la vuelta 1:");
let vuelta2 = readlinesync.questionInt("ingrese la vuelta 2:");
let vuelta3 = readlinesync.questionInt("ingrese la vuelta3:");
let vuelta4 = readlinesync.questionInt("ingrese la vuelta 4:");
let tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
console.log("tiempoTotal;" ,tiempoTotal);
console.log("promedio de vuelta:", tiempoTotal/4);