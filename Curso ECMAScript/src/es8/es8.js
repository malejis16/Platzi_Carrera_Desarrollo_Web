// object.entries : nos permite devolver los valores de una matriz

const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana",
};

// transformar objeto en matriz
const entries = Object.entries(data);
console.log(data, entries);
console.log(entries.length);

// Object.values : mew devuelve los valores de un objeto a un arreglo

const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana",
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

// Pading: anteponer o agregar una cadena vacia o elementos a este string

const string = "hello";
console.log(string.padStart(8, "hi "));
console.log(string.padEnd(12, " world!!"));

// la ultima COMA si se puede tener, que establece que se pude tener un valor o no en el siguiente espacio
// no genera error

const obj = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana",
};

// ------------------------    Async  -----------------------------------

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => {
          resolve("Hello World!");
        }, 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

//console.log(helloWorld());
//helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
