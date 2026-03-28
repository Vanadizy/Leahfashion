"use strict";

const floatingActions = document.getElementById("floating-actions");
const backToTopButton = document.getElementById("back-to-top");

function syncFloatingActions() {
  if (!floatingActions) {
    return;
  }

  floatingActions.classList.toggle("is-visible", window.scrollY > 120);
}

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

window.addEventListener("scroll", syncFloatingActions, { passive: true });
syncFloatingActions();
