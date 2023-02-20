var foto1 = "../Cuponcitos/Imagenes-Cupones/foto-pinwinos.jpg";
var foto2 = "../Cuponcitos/Imagenes-Cupones/foto-cenita.jpg";
var foto3 = "../Cuponcitos/Imagenes-Cupones/foto-chapatas.jpg";
var foto4 = "../Cuponcitos/Imagenes-Cupones/foto-donas.jpg";
var foto5 = "../Cuponcitos/Imagenes-Cupones/foto-peleita.jpg";
var foto6 = "../Cuponcitos/Imagenes-Cupones/foto-flores.jpg";
var foto7 = "../Cuponcitos/Imagenes-Cupones/foto-heladore.jpg";
var foto8 = "../Cuponcitos/Imagenes-Cupones/foto-lunch.jpg";
var foto9 = "../Cuponcitos/Imagenes-Cupones/foto-comida.jpg";
var foto10 = "../Cuponcitos/Imagenes-Cupones/foto-esperanza.jpg";
var foto11 = "../Cuponcitos/Imagenes-Cupones/foto-piojito.jpg";
var foto12 = "../Cuponcitos/Imagenes-Cupones/foto-pizza.jpeg";

var movimientos = 0;
var cupon = 0;
var grupoTarjetas = [
  [foto1, foto2],
  [foto3],
  [foto4, foto5],
  [foto6],
  [foto7, foto8],
  [foto9],
  [foto10, foto11],
  [foto12],
];
var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3,
    cuponActual: 1,
    nivel: 0,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 6,
    cuponActual: 2,
    nivel: 1,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 10,
    cuponActual: 3,
    nivel: 2,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 15,
    cuponActual: 4,
    nivel: 3,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 20,
    cuponActual: 6,
    nivel: 5,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4],
      grupoTarjetas[5]
    ),
    movimientosMax: 25,
    cuponActual: 7,
    nivel: 6,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4],
      grupoTarjetas[5],
      grupoTarjetas[6]
    ),
    movimientosMax: 30,
    cuponActual: 8,
    nivel: 7,
  },
];
