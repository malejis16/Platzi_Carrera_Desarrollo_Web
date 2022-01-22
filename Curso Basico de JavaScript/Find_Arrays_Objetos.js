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
  { nombre: "Nevera", costo: 1750 },
];

// FIND devuelve un true o un false si encuentra el articulo, genera un nuevo array y no modifica el actual

var encuentraArticulo = articulos.find(function (unArticulo) {
  return unArticulo.nombre == "Nevera";
});

console.log(encuentraArticulo);
