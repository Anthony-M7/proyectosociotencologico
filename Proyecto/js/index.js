document
  .getElementById("boton-hamburguesa")
  .addEventListener("click", function () {
    var menu = document.getElementById("menu-hamburguesa");
    var boton = document.getElementById("boton-hamburguesa");
    var icono = document.querySelector("#boton-hamburguesa span");

    menu.classList.toggle("mostrando");
    boton.classList.toggle("mostrando");
    icono.classList.toggle("rotar");
  });