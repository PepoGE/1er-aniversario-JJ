function iniciar() {
  movimientos = 0;
  repartirTarjetas(niveles[nivelActual].tarjetas);
  document.querySelector("#mov").innerText = "00";
  maxContador();
  document.querySelector("#mesa").classList.add("visible");
  document.querySelector("#cabecera").style.display = "flex";
  document.querySelectorAll(".sube-nivel").forEach(function (elemento) {
    elemento.classList.remove("visible");
  });
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });
  document.querySelectorAll(".tarjeta-chiquita").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });
}

function reiniciar() {
  nivelActual = 0;
  actualizarNivel();
  iniciar();
}

iniciar();

document.querySelectorAll(".reiniciar").forEach(function (elemento) {
  elemento.addEventListener("click", reiniciar);
});

document.querySelectorAll(".subir").forEach(function (elemento) {
  elemento.addEventListener("click", cargarNuevoNivel);
});
