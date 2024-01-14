import ScrollAnimate from "./modules/scroll-animate.js";
import MobileMenu from "./modules/mobile-menu.js";


const scrollAnimate = new ScrollAnimate('[data-animate="scroll"]'); // Seletor das seções que vão animar
scrollAnimate.init();

const mobileMenu = new MobileMenu(
  '[data-menu="hamburguer"]',
  '[data-menu="lista"]'
); //Seletores do botão do menu hambúrguer e da lista (ul) dele
mobileMenu.init();


// Exibe alerta de mensagem enviada
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputs = document.querySelectorAll("input, select,textarea");

  document.getElementById("successMessage").style.display = "block";

  inputs.forEach((item) => {
    item.value = "";
  });
});


// Fecha mensagem enviada
document
  .getElementById("closeSuccessMessage")
  .addEventListener("click", function () {
    document.getElementById("successMessage").style.display = "none";
  });
