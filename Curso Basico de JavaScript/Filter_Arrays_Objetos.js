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

//Metodos para recorrer el array FILTER
// Filter ayuda a filtrar, valida si es verdadero o falso
// crea un nuevo array, no modifica el existente

var articulosFiltrados = articulos.filter(function (unArticulo) {
  return unArticulo.costo <= 1000;
});

console.log(articulosFiltrados);
