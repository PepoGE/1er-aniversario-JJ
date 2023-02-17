function acertar(tarjetasAcertadas) {
  tarjetasAcertadas.forEach(function (elemento) {
    elemento.classList.add("acertada");
  });
  document.querySelector("#sonido-acierto").cloneNode().play();
}

function fallar(tarjetasFalladas) {
  tarjetasFalladas.forEach(function (elemento) {
    elemento.classList.add("error");
  });
  document.querySelector("#sonido-error").cloneNode().play();

  setTimeout(function () {
    tarjetasFalladas.forEach(function (elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}
