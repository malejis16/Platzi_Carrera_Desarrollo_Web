// trabajar con numeros mas grandes a 2 a la 53 = 9007199254740991 actualmente hasta ahora
// era el numero mas grande de JavaScript

// metodo BigIn

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// prommisee all settle, una promesa despues de que todas las promesas se haya hecho

const promise1 = new Promise((resolve, reject) => reject("rechazado"));
const promise2 = new Promise((resolve, reject) => resolve("solucionado"));
const promise3 = new Promise((resolve, reject) => resolve("solucionado2"));

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

// global this - Para trabajar en cualquier servidor

console.log(window);
console.log(globalThis);

// Operador Nulo, nos devuelve su operando de lado derecho cuando su es nullo, de lo contrario el valor izquierdo

const uno = null ?? "default string";
console.log(uno);

const dos = "Hola" ?? "default string";
console.log(dos);

// optional chaining, los signos de pregunta nos indican que vamos a leer pero sin romper
// la aplicación y deja de ejecutar el programa
// al no existir lo convierte en un undefined

const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
  console.log("email");
} else {
  console.log("fail");
}
