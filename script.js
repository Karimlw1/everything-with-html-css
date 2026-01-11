document.querySelectorAll(".rose_mixte span, .bouquets span").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.color = "var(--primary)";
    item.style.fontWeight = "600";
    item.style.transition = "0.3s ease";
  });

  item.addEventListener("mouseleave", () => {
    item.style.color = "inherit";
    item.style.fontWeight = "400";
  });
});

window.addEventListener("load", () => {
    const box = document.querySelectorAll(".welcome-box");
    box.classList.add("visible");
  });
window.addEventListener("scroll", () => {
    const box = document.querySelectorAll(".welcome-box")[1];
    if (window.scrollY >= 500) {
      box.classList.add("visible");
    } else {
        box.classList.remove("visible");
        }
});