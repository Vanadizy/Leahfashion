"use strict";

const siteHeader = document.querySelector(".site-header");
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");
const floatingActions = document.getElementById("floating-actions");
const backToTopButton = document.getElementById("back-to-top");

function setNavOpen(isOpen) {
  if (!siteNav || !navToggle) {
    return;
  }

  siteNav.classList.toggle("is-open", isOpen);
  navToggle.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeNav() {
  setNavOpen(false);
}

function toggleNav(event) {
  event.stopPropagation();
  setNavOpen(!siteNav.classList.contains("is-open"));
}

function closeNavOnLink(event) {
  if (event.target.tagName === "A") {
    closeNav();
  }
}

function closeNavOnOutsideClick(event) {
  if (!siteNav || !navToggle || !siteNav.classList.contains("is-open")) {
    return;
  }

  if (siteNav.contains(event.target) || navToggle.contains(event.target)) {
    return;
  }

  closeNav();
}

function closeNavOnEscape(event) {
  if (event.key === "Escape") {
    closeNav();
  }
}

function syncHeaderState() {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle("is-landing", window.scrollY < 28);
}

function syncFloatingActions() {
  if (!floatingActions) {
    return;
  }

  floatingActions.classList.toggle("is-visible", window.scrollY > 120);
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", toggleNav);
  siteNav.addEventListener("click", closeNavOnLink);
  document.addEventListener("click", closeNavOnOutsideClick);
  document.addEventListener("keydown", closeNavOnEscape);
}

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

window.addEventListener(
  "scroll",
  () => {
    syncHeaderState();
    syncFloatingActions();
  },
  { passive: true }
);
syncHeaderState();
syncFloatingActions();
