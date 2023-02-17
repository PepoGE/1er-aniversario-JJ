function gameOver() {
  document.querySelector("#gameOver").classList.add("visible");
  document.querySelector("#mesa").classList.remove("visible");
  document.querySelector("#cabecera").style.display = "none";
}
