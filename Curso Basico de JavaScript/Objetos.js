var miAuto = {
  //propiedades
  marca: "Toyota",
  modelo: "Corola",
  annio: 2020,
  detalleDelAuto: function () {
    console.log("Auto " + this.modelo + " " + this.annio);
    //console.log("Auto ${this.modelo} ${this.annio}");
  },
};

console.log(miAuto);

//Acceder a los objetos
miAuto.marca;
// Acceder a las funciones de los objetos (metodos)
miAuto.detalleDelAuto();
