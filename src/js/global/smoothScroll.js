export function initSmoothScroll() {
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (!element) return;

    const offsetTop = element.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = offsetTop - startPosition;
    const duration = 950;
    let start = null;

    function animationStep(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easeInOutCubic = (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const time = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * easeInOutCubic(time));
      if (progress < duration) requestAnimationFrame(animationStep);
    }

    requestAnimationFrame(animationStep);
  };

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href").length > 1) {
        e.preventDefault();
        const target = this.getAttribute("href");
        smoothScroll(target);
      }
    });
  });
}
