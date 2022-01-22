// Estraer un objeto con los datos que solamente yo necesito

const obj = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana",
};

let { backend, ...all } = obj;
console.log(all);

const valuesAll = Object.values(all);
console.log(valuesAll);

//

const obj = {
  name: "Oscar",
  age: 32,
};

const obj2 = {
  ...obj,
  country: "MX",
};
console.log(obj2);

//

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hello World") : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizó1"))
  .finally(() => console.log("Finalizó"));

// agregando set time out

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 4000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizó1"))
  .finally(() => console.log("Finalizó"));

// como podemos agrupar bloques de regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");

const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
