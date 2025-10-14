import { initNavbar } from "../../js/pages/nav.js";
import { initServices } from "../../js/pages/services.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initServices();

  console.log(
    "%cVasques Tech",
    "color: #FF4500; font-size: 24px; font-weight: bold;"
  );
  console.log(
    "%cSite desenvolvido com HTML, CSS e JavaScript puro",
    "color: #b0b0b0; font-size: 12px;"
  );
});
