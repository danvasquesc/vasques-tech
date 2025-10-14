function initServiceObserver() {
  const serviceCards = document.querySelectorAll("[data-animate]");

  if (!serviceCards.length) return;

  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  serviceCards.forEach((card) => observer.observe(card));
}

function initServiceHover() {
  const cards = document.querySelectorAll(".service-card");

  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });
}

export function initServices() {
  initServiceObserver();
  initServiceHover();
}
