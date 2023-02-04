function acertar(tarjetasAcertadas) {
  tarjetasAcertadas.forEach(function (elemento) {
    elemento.classList.add("acertada");
  });
}

function fallar(tarjetasFalladas) {
  tarjetasFalladas.forEach(function (elemento) {
    elemento.classList.remove("descubierta");
  });
}
