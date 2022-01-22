var cadena = [4, 3, 10, 8, 9, 11, 3, 20, 6, 0];

function segundoNumeroMasGrande(cadena) {
  primero = cadena[0];
  segundo = 0;
  for (i = 0; i <= cadena.length; i++) {
    if (cadena[i] > primero) {
      if (cadena[i] > segundo && segundo < primero) {
        segundo = primero;
      }
      primero = cadena[i];
    }
  }
  let c = [primero, segundo];
  return c;
}

var c = segundoNumeroMasGrande(cadena);
console.log(c);
