function RevolverTarjetas(lasTarjetas) {
  var totalTarjetas = lasTarjetas.concat(lasTarjetas);
  var resultado = totalTarjetas.sort(function () {
    return 0.5 - Math.random();
  });
  return resultado;
}

function repartirTarjetas(lasTarjetas) {
  var mesa = document.querySelector("#mesa");
  var tarjetasRevueltas = RevolverTarjetas(lasTarjetas);

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
