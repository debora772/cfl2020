let readlineSync = require("readline-Sync");
let base = readlineSync.questionInt("ingrese base:");
let altura = readlineSync.questionInt("ingrese altura:");
let area = base * altura;
console.log("el area es",area);