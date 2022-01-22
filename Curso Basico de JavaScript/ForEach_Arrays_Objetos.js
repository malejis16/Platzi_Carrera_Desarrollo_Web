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

// For Each, no va a generar un nuevo array, va a hacer un filtrado del array existente
// y va a devolver valores SIN modificarlo

articulos.forEach(function (unArticulo) {
  console.log(unArticulo.nombre);
});
