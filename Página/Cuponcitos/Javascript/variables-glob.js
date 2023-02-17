var foto1 = "../Cuponcitos/Imagenes-Cupones/foto-azulitos.jpg";
var foto2 = "../Cuponcitos/Imagenes-Cupones/foto-cenita.jpg";
var foto3 = "../Cuponcitos/Imagenes-Cupones/foto-flores.jpg";
var foto4 = "../Cuponcitos/Imagenes-Cupones/foto-palito.jpg";
var foto5 = "../Cuponcitos/Imagenes-Cupones/foto-peleita.jpg";
var foto6 = "../Cuponcitos/Imagenes-Cupones/foto-pinwinos.jpg";
var foto7 = "../Cuponcitos/Imagenes-Cupones/foto-piojito.jpg";
var foto8 = "../Cuponcitos/Imagenes-Cupones/foto-pizza.jpeg";

var movimientos = 0;
var grupoTarjetas = [
  [foto1, foto2],
  [foto3, foto4],
  [foto5, foto6],
  [foto7, foto8],
];
var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 20
  },
];
