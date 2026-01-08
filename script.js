// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const btn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");

btn?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  btn.setAttribute("aria-expanded", open ? "true" : "false");
});

// Close mobile nav on click
nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    btn?.setAttribute("aria-expanded", "false");
  });
});
