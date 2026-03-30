"use strict";

const siteHeader = document.querySelector(".site-header");
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");
const floatingActions = document.getElementById("floating-actions");
const backToTopButton = document.getElementById("back-to-top");
const detailCards = Array.from(document.querySelectorAll(".detail-style-card"));
const lightbox = document.getElementById("detail-lightbox");
const lightboxBackdrop = document.getElementById("lightbox-backdrop");
const lightboxCloseButton = document.getElementById("lightbox-close");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxKicker = document.getElementById("lightbox-kicker");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxText = document.getElementById("lightbox-text");
const lightboxDetails = document.getElementById("lightbox-details");
const i18n = window.LeahI18n || null;

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
    closeLightbox();
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

function getPageKey() {
  return window.location.pathname.toLowerCase().includes("gallery")
    ? "gallery"
    : "catalog";
}

function openLightbox(card) {
  if (
    !lightbox ||
    !lightboxImage ||
    !lightboxKicker ||
    !lightboxTitle ||
    !lightboxText ||
    !lightboxDetails
  ) {
    return;
  }

  const image = card.querySelector(".detail-media img");
  const kicker = card.querySelector(".section-tag");
  const title = card.querySelector("h3");
  const text = card.querySelector("h3 + p");
  const details = card.querySelector(".detail-list");

  lightboxImage.src = image?.src || "";
  lightboxImage.alt = image?.alt || "";
  lightboxKicker.textContent = kicker?.textContent?.trim() || "";
  lightboxTitle.textContent = title?.textContent?.trim() || "";
  lightboxText.textContent = text?.textContent?.trim() || "";
  lightboxDetails.innerHTML = details ? details.innerHTML : "";

  lightbox.hidden = false;
  document.body.classList.add("panel-open");
}

function closeLightbox() {
  if (!lightbox) {
    return;
  }

  lightbox.hidden = true;
  document.body.classList.remove("panel-open");
}

function onDetailCardKeydown(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openLightbox(event.currentTarget);
  }
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", toggleNav);
  siteNav.addEventListener("click", closeNavOnLink);
  document.addEventListener("click", closeNavOnOutsideClick);
  document.addEventListener("keydown", closeNavOnEscape);
}

detailCards.forEach((card) => {
  card.addEventListener("click", () => openLightbox(card));
  card.addEventListener("keydown", onDetailCardKeydown);
});

if (lightboxBackdrop) {
  lightboxBackdrop.addEventListener("click", closeLightbox);
}

if (lightboxCloseButton) {
  lightboxCloseButton.addEventListener("click", closeLightbox);
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

if (i18n) {
  i18n.applyPageTranslations(getPageKey());
  i18n.mountLanguageMenu();
}

syncHeaderState();
syncFloatingActions();
