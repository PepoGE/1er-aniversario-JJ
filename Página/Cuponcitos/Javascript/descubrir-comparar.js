function descubrir() {
  var totalDescubiertas = document.querySelectorAll(
    ".descubierta:not(.acertada)"
  );
  var descubiertas;

  if (totalDescubiertas.length > 1) {
    return;
  }

  this.classList.add("descubierta");

  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubiertas.length < 2) {
    return;
  }

  compararTarjetas(descubiertas);
}

function compararTarjetas(tarjetasPorComparar) {
  if (
    tarjetasPorComparar[0].dataset.valor ===
    tarjetasPorComparar[1].dataset.valor
  ) {
    acertar(tarjetasPorComparar);
  } else {
    fallar(tarjetasPorComparar);
  }
}
