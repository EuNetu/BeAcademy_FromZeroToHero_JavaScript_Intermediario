//IIFE é uma função em JavaScript que é executada assim que definida.

const nameFunction = (function () {
  var name = "Camilla";
  return name;
})();

console.log(nameFunction);

//Arrow function

/*
  Função tradicional

  functiomn hello(textoEntrada){
    return `Hello ${textoEntrada}`
  }
*/

//Convertendo para uma arow function

const hello = (textoEntrada) => `Hello ${textoEntrada}`;

console.log(hello("World"));

//Arrow function com função map

const grades = [7, 5, 10, 4];

const ExtraPoint = grades.map((grade) => (grade < 8.5 ? grade + 1.5 : grade));

console.log(ExtraPoint);
