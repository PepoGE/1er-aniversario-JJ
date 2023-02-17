function descubrir() {
  var totalDescubiertas = document.querySelectorAll(
    ".descubierta:not(.acertada)"
  );
  var tarjetasPendientes;
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
  tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
  if (tarjetasPendientes.length === 0) {
    setTimeout(finalizar, 1000);
  }
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
