function ObtenerTextoDelUsuario() {
  let textoIngresado = document.getElementById("ingresarTexto").value;
  return textoIngresado;
}

function Encriptar() {
  var textoIngresado = ObtenerTextoDelUsuario();
  var textoEncriptado = textoIngresado.replace(/e/gim, "enter");
  textoEncriptado = textoEncriptado.replace(/i/gim, "imes");
  textoEncriptado = textoEncriptado.replace(/a/gim, "ai");
  textoEncriptado = textoEncriptado.replace(/o/gim, "ober");
  textoEncriptado = textoEncriptado.replace(/u/gim, "ufat");
  console.log(textoEncriptado);
  return textoEncriptado;
}

function Desencriptar() {
  var textoIngresado = ObtenerTextoDelUsuario();
  var textoDesencriptado = textoIngresado.replace(/enter/gim, "e");
  textoDesencriptado = textoDesencriptado.replace(/imes/gim, "i");
  textoDesencriptado = textoDesencriptado.replace(/ai/gim, "a");
  textoDesencriptado = textoDesencriptado.replace(/ober/gim, "o");
  textoDesencriptado = textoDesencriptado.replace(/ufat/gim, "u");
  console.log(textoDesencriptado);
  return textoDesencriptado;
}

{
  //Ocultar Elementos
  function OcultarImagen() {
    document.getElementById("img-muneco").style.display = "none";
  }
  function OcultarTextosResultados() {
    document.getElementById("textos-de-resultados").style.display = "none";
  }

  function OcultarTextoResultadoDefault() {
    OcultarImagen();
    OcultarTextosResultados();
  }
}

function CambiarTextoEncriptado() {
  var texto = Encriptar();
  document.getElementById("text-result-encrypted").style.display = "flex";
  document.getElementById("text-encrypted").innerText = texto;
}

function CambiarTextoDesencriptado() {
  var texto = Desencriptar();
  document.getElementById("text-result-encrypted").style.display = "flex";
  document.getElementById("text-encrypted").innerText = texto;
}

function AlternarTextoEncriptado() {
  OcultarTextoResultadoDefault();
  CambiarTextoEncriptado();
}

function AlternarTextoDesencriptado() {
  OcultarTextoResultadoDefault();
  CambiarTextoDesencriptado();
}

function CopiarTexto() {
  let mensajeCopiado = document.getElementById("text-encrypted");
  mensajeCopiado.select();
  mensajeCopiado.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(mensajeCopiado.value);
}

document.getElementById("encriptar").onclick = AlternarTextoEncriptado;
document.getElementById("desencriptar").onclick = AlternarTextoDesencriptado;
document.getElementById("copiar").onclick = CopiarTexto;

let textArea = document.getElementById("ingresarTexto");

textArea.focus();
textArea.selectionStart = textArea.value.length;

function desplegarSecretos() {
  document.querySelector("#lista-secretos").classList.add("visible");
}

function cerrarSecretos() {
  document.querySelector("#lista-secretos").classList.remove("visible");
}

document
  .querySelector("#boton-secretos")
  .addEventListener("click", desplegarSecretos);
document.querySelector("#close").addEventListener("click", cerrarSecretos);
