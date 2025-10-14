export function initHoverEffects() {
  const addHoverEffect = (element, scale = 1.05) => {
    element.addEventListener("mouseenter", () => {
      element.style.transform = `scale(${scale})`;
    });
    element.addEventListener("mouseleave", () => {
      element.style.transform = "scale(1)";
    });
  };

  const buttons = document.querySelectorAll(".btn, .service-btn");
  buttons.forEach((button) => {
    button.style.transition = "all 0.3s ease";
    addHoverEffect(button);
  });
}
