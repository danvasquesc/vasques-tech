export function initNavbar() {
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!header || !menuToggle || !navMenu) return;

  // === Sombra no scroll ===
  const toggleHeaderShadow = () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", toggleHeaderShadow);

  // === Abrir / Fechar menu ===
  const toggleMenu = () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  };
  menuToggle.addEventListener("click", toggleMenu);

  // === Fechar menu ao clicar em um link ===
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // === Esconder navbar ao rolar pra baixo ===
  let lastScroll = 0;
  const scrollThreshold = 5;

  const hideOnScroll = () => {
    const currentScroll = window.pageYOffset;
    if (Math.abs(currentScroll - lastScroll) < scrollThreshold) return;

    if (currentScroll > lastScroll && currentScroll > 100) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }
    lastScroll = currentScroll;
  };

  window.addEventListener("scroll", hideOnScroll);
}
