/*let texto = "PeRo QUE bIen Se SIENte ProgramAR";
let resultado = "";
for (i = 0; i < texto.length; i++) {
  if (texto[i] == texto.toUpperCase()) {
    resultado += texto.toLowerCase[i];
  } else {
    resultado += texto.toUpperCase[i];
  }
}
console.log(resultado);*/

let texto = "PeRo QUE bIen Se SIENte ProgramAR";
let resultado = "";
for (var i of texto) {
  if (i == i.toUpperCase()) {
    resultado += i.toLowerCase();
  } else {
    resultado += i.toUpperCase();
  }
}
console.log(resultado);
