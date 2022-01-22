const boton = document.getElementById("botoncito");

boton.addEventListener("click", async function () {
  const module = await import("./file.js");
  module.escribir();
});
