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
const lightboxPrevButton = document.getElementById("lightbox-prev");
const lightboxNextButton = document.getElementById("lightbox-next");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxKicker = document.getElementById("lightbox-kicker");
const lightboxCounter = document.getElementById("lightbox-counter");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxText = document.getElementById("lightbox-text");
const lightboxDetails = document.getElementById("lightbox-details");
const lightboxRequestButton = document.getElementById("lightbox-request");
const detailCategories = Array.from(document.querySelectorAll(".detail-category"));
const i18n = window.LeahI18n || null;
let currentLightboxIndex = -1;
let lastLightboxTrigger = null;
let lightboxCloseTimer = null;
const CATEGORY_COLLAPSE_LIMIT = 12;

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

function handleDocumentKeydown(event) {
  if (event.key === "Escape") {
    closeNav();
    closeLightbox();
    return;
  }

  if (!lightbox || lightbox.hidden) {
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    stepLightbox(-1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    stepLightbox(1);
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

function getUiText(key, fallback) {
  return i18n ? i18n.t(key) : fallback;
}

function setupCategoryToggles() {
  detailCategories.forEach((category) => {
    const grid = category.querySelector(".detail-category-grid");
    const cards = Array.from(grid?.querySelectorAll(".detail-style-card") || []);
    if (!grid || cards.length <= CATEGORY_COLLAPSE_LIMIT) {
      return;
    }

    grid.classList.add("is-collapsed");
    category.classList.add("has-toggle");

    let toggleWrap = category.querySelector(".detail-category-toggle-wrap");
    if (!toggleWrap) {
      toggleWrap = document.createElement("div");
      toggleWrap.className = "detail-category-toggle-wrap";
      toggleWrap.innerHTML = `
        <button class="detail-category-toggle" type="button" aria-expanded="false">
          ${getUiText("viewAll", "View All")}
        </button>
      `;
      grid.insertAdjacentElement("afterend", toggleWrap);
    }

    const toggle = toggleWrap.querySelector(".detail-category-toggle");
    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isExpanded = grid.classList.toggle("is-collapsed") === false;
      toggle.setAttribute("aria-expanded", String(isExpanded));
      toggle.textContent = isExpanded
        ? getUiText("showLess", "Show Less")
        : getUiText("viewAll", "View All");
    });
  });
}

function createDetailItem(title, text) {
  const item = document.createElement("div");
  const strong = document.createElement("strong");
  strong.textContent = title;
  item.appendChild(strong);
  item.append(text);
  return item;
}

function renderLightboxDetails(card) {
  if (!lightboxDetails) {
    return;
  }

  lightboxDetails.innerHTML = "";

  const details = card.querySelectorAll(".detail-list div");
  if (details.length) {
    details.forEach((item) => {
      lightboxDetails.appendChild(item.cloneNode(true));
    });
    return;
  }

  const categoryTitle =
    card.closest(".detail-category")?.querySelector(".detail-category-head h3")?.textContent?.trim() ||
    "";
  if (!categoryTitle) {
    return;
  }

  lightboxDetails.appendChild(
    createDetailItem(getPageKey() === "gallery" ? "Event" : "Category", categoryTitle)
  );
}

function syncLightboxNavigation() {
  if (lightboxPrevButton) {
    lightboxPrevButton.disabled = currentLightboxIndex <= 0;
  }

  if (lightboxNextButton) {
    lightboxNextButton.disabled =
      currentLightboxIndex < 0 || currentLightboxIndex >= detailCards.length - 1;
  }

  if (lightboxCounter) {
    lightboxCounter.textContent =
      currentLightboxIndex >= 0 ? `${currentLightboxIndex + 1} / ${detailCards.length}` : "";
  }
}

function syncLightboxContent(card) {
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

  lightboxImage.src = image?.src || "";
  lightboxImage.alt = image?.alt || "";
  lightboxKicker.textContent = kicker?.textContent?.trim() || "";
  lightboxTitle.textContent = title?.textContent?.trim() || "";
  lightboxText.textContent = text?.textContent?.trim() || "";
  renderLightboxDetails(card);
  if (lightboxRequestButton) {
    lightboxRequestButton.textContent = getUiText("requestFitting", "Request a Fitting");
    lightboxRequestButton.setAttribute("href", "index.html#contact");
  }
  syncLightboxNavigation();
}

function openLightbox(index) {
  const card = detailCards[index];
  if (!card) {
    return;
  }

  if (lightboxCloseTimer) {
    window.clearTimeout(lightboxCloseTimer);
    lightboxCloseTimer = null;
  }

  currentLightboxIndex = index;
  lastLightboxTrigger = card;
  syncLightboxContent(card);

  lightbox.hidden = false;
  lightbox.classList.remove("is-closing");
  document.body.classList.add("panel-open");
  window.requestAnimationFrame(() => {
    lightbox.classList.add("is-visible");
    lightboxCloseButton?.focus();
  });
}

function stepLightbox(step) {
  const nextIndex = currentLightboxIndex + step;
  if (nextIndex < 0 || nextIndex >= detailCards.length) {
    syncLightboxNavigation();
    return;
  }

  currentLightboxIndex = nextIndex;
  syncLightboxContent(detailCards[currentLightboxIndex]);
}

function closeLightbox() {
  if (!lightbox || lightbox.hidden) {
    return;
  }

  lightbox.classList.remove("is-visible");
  lightbox.classList.add("is-closing");
  document.body.classList.remove("panel-open");
  if (lightboxCloseTimer) {
    window.clearTimeout(lightboxCloseTimer);
  }

  lightboxCloseTimer = window.setTimeout(() => {
    lightbox.hidden = true;
    lightbox.classList.remove("is-closing");
    currentLightboxIndex = -1;
    if (lightboxCounter) {
      lightboxCounter.textContent = "";
    }
    lastLightboxTrigger?.focus?.();
    lightboxCloseTimer = null;
  }, 280);
}

function onDetailCardKeydown(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openLightbox(detailCards.indexOf(event.currentTarget));
  }
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", toggleNav);
  siteNav.addEventListener("click", closeNavOnLink);
  document.addEventListener("click", closeNavOnOutsideClick);
}

document.addEventListener("keydown", handleDocumentKeydown);

detailCards.forEach((card, index) => {
  card.addEventListener("click", () => openLightbox(index));
  card.addEventListener("keydown", onDetailCardKeydown);
});

if (lightboxBackdrop) {
  lightboxBackdrop.addEventListener("click", closeLightbox);
}

if (lightboxCloseButton) {
  lightboxCloseButton.addEventListener("click", closeLightbox);
}

if (lightboxPrevButton) {
  lightboxPrevButton.addEventListener("click", () => stepLightbox(-1));
}

if (lightboxNextButton) {
  lightboxNextButton.addEventListener("click", () => stepLightbox(1));
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

setupCategoryToggles();
syncHeaderState();
syncFloatingActions();
