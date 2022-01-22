//Funcion Constructora para crear más objetos

function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

//NEW genera una nueva instancia, genera un objeto de otro objeto
var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Modelo X", 2016);
var autoNuevo3 = new auto("Toyota", "Corola", 2020);

console.log(autoNuevo);
console.log(autoNuevo2);
console.log(autoNuevo3);

var autosNuevos = [];
for (i = 0; i < 30; i++) {
  autosNuevos[i] = new auto("Mercedez", "Mocato" + i, 2021 - i);
}
console.log(autosNuevos);
