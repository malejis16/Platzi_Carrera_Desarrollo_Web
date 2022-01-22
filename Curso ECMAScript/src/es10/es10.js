// Array.falt -> recibe como argumento la profundidad (niveles)

let array = [1, 2, 3, 4, [5, 6, 7, [8, 9, 10, [11, 12]]]];

console.log(array.flat(1));
console.log(array.flat(2));
console.log(array.flat(3));

// flat map: mapear cada elemento, pasarle una funcion y aplanarlo segun el resultado

let array2 = [1, 2, 3, 4];
console.log(array2.flatMap((value) => [value, value * 2]));

// eliminar los espacios en blanco de un string

let hello = "    Hola   mundo   lindo      ";
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

// posibilidad de enviar o no el parametro en Catch! es decir la palabra error:

try {
} catch (error) {}

// from entries, transforma clave vsalor en objetos
// transofrmar de arreglos a objetos.

let entries = [
  ["name", "oscar"],
  ["age", 32],
];

console.log(Object.fromEntries(entries));

// acceder a una descripcion de un obejto tipo simbolo

let miTexto = "Mi texto que convertiré en tipo symbol";
let symbol = Symbol(miTexto);
console.log(symbol.description);
