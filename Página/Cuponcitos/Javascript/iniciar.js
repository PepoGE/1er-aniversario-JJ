function iniciar() {
  movimientos = 0;
  repartirTarjetas(niveles[nivelActual].tarjetas);
  document.querySelector("#mesa").classList.add("visible");
  document.querySelector("#sube-nivel").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });
}

function reiniciar (){
  nivelActual = 0;
  actualizarNivel();
  iniciar();
}

iniciar();

document.querySelectorAll(".reiniciar").forEach(function (elemento){
 elemento.addEventListener("click", reiniciar);
});

document.querySelector("#subir").addEventListener("click", cargarNuevoNivel);