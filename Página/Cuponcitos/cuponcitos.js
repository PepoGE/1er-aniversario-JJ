var foto1 = "../Cuponcitos/Imagenes-Cupones/foto-azulitos.jpg";
var foto2 = "../Cuponcitos/Imagenes-Cupones/foto-cenita.jpg";
var foto3 = "../Cuponcitos/Imagenes-Cupones/foto-flores.jpg";
var foto4 = "../Cuponcitos/Imagenes-Cupones/foto-palito.jpg";
var foto5 = "../Cuponcitos/Imagenes-Cupones/foto-peleita.jpg";
var foto6 = "../Cuponcitos/Imagenes-Cupones/foto-pinwinos.jpg";
var foto7 = "../Cuponcitos/Imagenes-Cupones/foto-piojito.jpg";
var foto8 = "../Cuponcitos/Imagenes-Cupones/foto-pizza.jpeg";

var grupoTarjetas = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function repartirTarjetas() {
  var mesa = document.querySelector("#mesa");

  mesa.innerHTML = "";

  totalTarjetas.forEach(function (elemento, index) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      '<div id="tarjeta" class="tarjeta">' +
      '<img src="' +
      elemento +
      '" class = "contenidoTarjeta" alt="foto-' +
      index +
      '" srcset=""></img>' +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}

function descubrir() {
  this.classList.add("descubierta");
}

repartirTarjetas();

document
  .querySelectorAll(".tarjeta, .contenidoTarjeta img")
  .forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });
