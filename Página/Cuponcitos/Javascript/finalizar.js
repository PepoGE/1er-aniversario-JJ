function finalizar() {
  if (nivelActual < niveles.length - 1) {
    document
      .querySelector("#sube-nivel-" + niveles[nivelActual].cuponActual)
      .classList.add("visible");
    document.querySelector("#mesa").classList.remove("visible");
    document.querySelector("#sonido-subirNivel").play();
  } else {
    document.querySelector("#endGame").classList.add("visible");
    document.querySelector("#mesa").classList.remove("visible");
    document.querySelector("#sonido-endGame").play();
  }
}
