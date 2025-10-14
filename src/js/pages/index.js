import { initNavbar } from "../../js/pages/nav.js";
import { initServices } from "../../js/pages/services.js";
import { initSmoothScroll } from "../../js/global/smoothScroll.js";
import { initConsoleMessage } from "../../js/global/consoleMessage.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initServices();
  initSmoothScroll();
  initConsoleMessage();
});
