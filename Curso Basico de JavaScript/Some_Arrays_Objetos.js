var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 800 },
  { nombre: "Nevera", costo: 6450 },
  { nombre: "Cargador", costo: 50 },
  { nombre: "Motocicleta", costo: 6000 },
  { nombre: "Teclado", costo: 1000 },
  { nombre: "Audifonos", costo: 1750 },
];

// Some nos regresa una validación de TRUE OR FALSE para articulos que cumplan con esa condicion
// se genera un nuevo array

var articulosBaratos = articulos.some(function (unArticulo) {
  return unArticulo.costo <= 150;
});

console.log(articulosBaratos);
