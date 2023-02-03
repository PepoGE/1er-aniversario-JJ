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
      elemento+
      ">" + 
      '<img src="' +
      elemento +
      '" class = "contenidoTarjeta" alt = "foto-'+
      index +
      '" />' +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}

function descubrir() {
  var totalDescubiertas = document.querySelectorAll(".descubierta");
  var descubiertas;

  if (totalDescubiertas.length > 1) {
    return;
  }

  this.classList.add("descubierta");

  descubiertas = document.querySelectorAll(".descubierta");
  if (descubiertas.length < 2) {
    return;
  }
 
  if (descubiertas[0].dataset.valor === descubiertas[1].dataset.valor){
    console.log("correcto");
  } else {
    console.log("incorrecto")
  }


}

repartirTarjetas();

document.querySelectorAll(".tarjeta").forEach(function (elemento) {
  elemento.addEventListener("click", descubrir);
});
