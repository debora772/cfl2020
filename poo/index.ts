import * as readlineSync from "readline-sync";

import express from 'express';
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

let nombre:string=readlineSync.question('nombre:');
console.log(nombre);
console.log()