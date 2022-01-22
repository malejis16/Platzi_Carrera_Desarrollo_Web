function newFunction(name, age, country) {
  var name = name || "Oscar";
  var age = age || 32;
  var country = country || "Colombia";
  console.log(name, age, country);
}

// es6

function newFunction2(name = "Oscar", age = 32, country = "Colombia") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Alejandra", "27", "Colombia");

//Ejemplo 2

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Ejemplo 3: Multilineas

let lorem = "Este es un ejemplo para multilinea \n" + "otra linea";

let lorem2 = `Este es el ejemplo 3 con es6
doy enter y vamos a ver si funciona`;

console.log(lorem);
console.log(lorem2);

// Ejemplo 4: destructurar elementos

let person = {
  name: "Carlos",
  age: 27,
  country: "Colombia",
};

console.log(person.name, person.age, person.country);

//se6

let { name, age, country } = person;
console.log(name, age, country);

// Ejemplo 4:  operador de progapación: nos permite expander varios elemnetos

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Jessica", "Camila"];

let education = ["David", ...team1, ...team2];
console.log(education);

// Var vs Let, el var es global el let unicamente dentro del scope local

{
  var globalVar = "global";
}

{
  let globalLet = "globalLet";
  console.log(globalLet);
}

console.log(globalVar);

// a una constante despues de ser declarada NO se le puede cambiar el valor

const a = "b";
a = "a";

// trabajando con objetos

let name = "Oscar";
let age = 32;

obj = { name: name, age: age };
console.log(obj);

//es6
obj2 = { name, age };
console.log(obj2);

// Arrow functions

const names = [
  { name: "Oscar", age: 32 },
  { name: "Alejandra", age: 27 },
];
//si queria iterar se hacia asi:
let listOfNames = names.map(function (indice) {
  console.log(indice.name);
});
//es6
let listOfNames2 = names.map((indice) => console.log(indice.name));

const listOfNames3 = (name, age, country) => {};

const listOfNames4 = (name) => {};

const square = (num) => num * num;

// lenguaje asincronico, dos eventos no suceden al mismo tiempo
// PROMESAS

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey");
    } else {
      reject("Upps");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("Hola"))
  .catch((error) => console.log(error));

// CLASES

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
const calc = new calculator();
console.log(calc);

const suma = calc.sum(5, 7);
console.log(suma);

// Exportando e importando

import { hello } from "./module";

hello();

//Generators : retorna uns serie de valores segun el codigo definido

function* helloWorld() {
  if (true) {
    yield "Hello";
  }
  if (true) {
    yield "World";
  }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
