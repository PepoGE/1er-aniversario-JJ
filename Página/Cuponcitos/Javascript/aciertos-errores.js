function acertar(tarjetasAcertadas) {
  tarjetasAcertadas.forEach(function (elemento) {
    elemento.classList.add("acertada");
  });
}

function fallar(tarjetasFalladas) {

  tarjetasFalladas.forEach(function (elemento) {
    elemento.classList.add("error");
  });
  setTimeout(function(){
    tarjetasFalladas.forEach(function (elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
  });
  }, 1000);
}
