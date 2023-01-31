var grupoTarjetas = ["J", "E", "S", "S", "I", "C", "A"];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function repartirTarjetas() {
  var mesa = document.querySelector("#mesa");

  mesa.innerHTML = "";

  totalTarjetas.forEach(function (elemento) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      '<div id="tarjeta" class="tarjeta">' +
      '<div id="contenidoTarjeta" class="contenidoTarjeta">' +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}

repartirTarjetas();
