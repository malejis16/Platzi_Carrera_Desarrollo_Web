/* Valor Include : trabaja sobre un arreglo o un spting
verifica si hay un elemento sobre un arreglo, antes se usaba un indexOf */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
if (numbers.includes(9)) {
  console.log("si se encuentra");
} else {
  console.log("no se encuentra");
}

// elevación a la potencia

let base = 4;
let exponente = 3;

let resultado = base ** exponente;
console.log(resultado);
