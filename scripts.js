const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const yearSpan = document.getElementById("year");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    nav.setAttribute("aria-expanded", String(!expanded));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      nav.setAttribute("aria-expanded", "false");
    });
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}
