function finalizar() {
  if(nivelActual < niveles.length - 1){
    document.querySelector("#sube-nivel").classList.add("visible");
    document.querySelector("#mesa").classList.remove("visible");
  } else {
    document.querySelector("#endGame").classList.add("visible");
    document.querySelector("#mesa").classList.remove("visible");
  }
  
}
