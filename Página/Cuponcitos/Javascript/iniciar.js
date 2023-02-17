function iniciar() {
  repartirTarjetas();
  document.querySelector("#sube-nivel").classList.remove("visible");
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });
}

iniciar();

document.querySelector("#reiniciar").addEventListener("click", iniciar);
