// Metodos nuevos

// replace all vs Replace

//Replace encontraba unicamente el primer elemento y lo reemplazaba
const texto = "Hola, Hola!!! este es el texto mas lindo del mundo";
const textoReplace = texto.replace("Hola", "Chao");
console.log(textoReplace);

//replace all encuentra todos los elementos y los reemplaza todos.
const texto = "Hola, Hola!!! este es el texto mas lindo del mundo";
const textoReplace = texto.replaceAll("Hola", "Chao");
console.log(textoReplace);




// metodos privados, los cuales podemos utilizar dentro de las clases
// podemos usar un prefijo # --> privado

class Message {
    #show(val){
        console.log(val);
    }
    get #add(val){

    }
}

const message = new Message();
message.show("hola");

// Promise Any, cuyo argumento va a ser un array de promesas, capturando la respuesta
// de la primera que sea resuelta de forma satisfactoria

const promise1 = new Promise((resolve,reject)=> reject("es por el 1"));
const promise2 = new Promise((resolve,reject)=> reject("es por el 1"));
const promise3 = new Promise((resolve,reject)=> resolve("es por el 3"));
const promise4 = new Promise((resolve,reject)=> resolve("es por el 4"));

Promise.any([promise1,promise2,promise3,promise4])
    .then(responde => console.log(responde));


// with ref, permite tener referencia sin que ese objeto sea recolectado

class anyClass {
    constructor(element){
    this.ref = new WeakRef(element)
 }
}

//Asignacion de AND (&&)/OR(||) /Null(??) logica 


let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);

