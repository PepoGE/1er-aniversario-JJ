function RevolverTarjetas() {
  var resultado = totalTarjetas.sort(function () {
    return 0.5 - Math.random();
  });
  return resultado;
}

function repartirTarjetas() {
  var mesa = document.querySelector("#mesa");
  var tarjetasRevueltas = RevolverTarjetas();

  mesa.innerHTML = "";

  tarjetasRevueltas.forEach(function (elemento, index) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      '<div class="tarjeta" data-valor= ' +
      elemento +
      ">" +
      '<img src="' +
      elemento +
      '" class = "contenidoTarjeta" alt = "foto-' +
      index +
      '" />' +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}
