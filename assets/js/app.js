"use strict";

const FONT_OPTIONS = {
  "Cormorant Garamond": '"Cormorant Garamond", Georgia, serif',
  "Plus Jakarta Sans": '"Plus Jakarta Sans", "Segoe UI", sans-serif'
};

const LEGACY_THEME = {
  accent: "#d4a95a",
  accentDeep: "#93672e",
  canvas: "#fbf5ec",
  surface: "#fffaf2",
  ink: "#23150b",
  muted: "#75634d"
};

const AWARD_IMAGE_FALLBACKS = [
  {
    image: "assets/images/fitting.jpeg",
    alt: "Bride wearing a fitted white wedding gown outdoors"
  },
  {
    image: "assets/images/satisfied_fitting.jpeg",
    alt: "Smiling woman wearing an orange fitted gown"
  },
  {
    image: "assets/images/details.jpeg",
    alt: "Woman in an embellished orange evening gown"
  },
  {
    image: "assets/images/designs.jpeg",
    alt: "Woman wearing a black and gold reception dress"
  },
  {
    image: "assets/images/leah.jpeg",
    alt: "Leah Fashion owner in a tailored outfit with measuring tape"
  },
  {
    image: "assets/images/fitting.jpeg",
    alt: "Bride wearing a fitted white wedding gown outdoors"
  }
];

const defaultContent = {
  theme: {
    accent: "#d4a95a",
    accentDeep: "#93672e",
    canvas: "#f6eee4",
    surface: "#f1e2d3",
    ink: "#4b3423",
    muted: "#6f5947"
  },
  brand: {
    name: "Leah Fashion",
    tagline: "Wedding couture studio",
    logo: "assets/images/brand/leah-fashion-logo.png",
    headingFont: "Cormorant Garamond",
    bodyFont: "Plus Jakarta Sans"
  },
  hero: {
    eyebrow: "Wedding Couture by Leah Fashion",
    title: "Wedding gowns, reception looks, and custom couture designed with graceful detail and joyful finishing.",
    text: "Leah Fashion creates bridal pieces that feel elegant in photographs, comfortable in movement, and memorable from the first fitting to the final reveal.",
    buttonLabel: "Read More",
    buttonTarget: "#about",
    image: "assets/images/fitting.jpeg",
    imageAlt: "Bride wearing a fitted white wedding gown outdoors",
    imageLabel: "Hero Wedding",
    portraitImage: "assets/images/leah.jpeg",
    portraitAlt: "Leah Fashion founder wearing a tailored design with measuring tape",
    portraitLabel: "Leah",
    badgeText: "Custom bridal design, refined fittings, and celebration styling shaped in Leah Fashion's warm studio process.",
    stats: [
      {
        value: "120+",
        label: "Bridal fittings finished with custom care."
      },
      {
        value: "8",
        label: "Signature collections for wedding and occasion styling."
      },
      {
        value: "1:1",
        label: "Personal consultations from concept to final fitting."
      }
    ]
  },
  whyUs: {
    title: "Why clients trust Leah Fashion",
    intro: "Clients choose Leah Fashion because the studio combines calm guidance, fitting accuracy, and a polished wedding finish. The brand also carries visible women-led recognition from 2025 and a creative story rooted in Mwanza, giving brides confidence in both the craftsmanship and the woman behind the label.",
    pillars: [
      {
        title: "Guided Consultations",
        text: "Each bride is guided through fabrics, silhouettes, finishing details, and fitting choices in a way that feels calm, personal, and easy to follow."
      },
      {
        title: "Tailored Finishing",
        text: "Leah Fashion refines each garment around the client's body, event mood, and movement so the final silhouette feels natural, flattering, and secure."
      },
      {
        title: "Joyful Fittings",
        text: "Warm communication, clear timelines, and thoughtful adjustments keep the process exciting rather than stressful, especially close to the wedding day."
      },
      {
        title: "Recognized Leadership",
        text: "Leah Fashion connects bridal workmanship with public recognition, including the 2025 Mwanamke Kinara and Mwanamke Shupavu mentions, alongside the founder story of Cherehani Festival Tanzania beginning from Mwanza."
      }
    ],
    awardsTitle: "Awards and leadership milestones behind Leah Fashion",
    awards: [
      {
        year: "2025",
        title: "Mwanamke Kinara Awards 2025",
        meta: "Women-led impact recognition",
        text: "Public coverage around Mwanamke Kinara presents it as a recognition platform that highlights standout women and visible community or business impact. On this site, it marks Leah Fashion's 2025 recognition for creative leadership and brand influence from Mwanza.",
        image: "assets/images/leah.jpeg",
        alt: "Leah Fashion founder portrait used for the Mwanamke Kinara Awards card"
      },
      {
        year: "2025",
        title: "Mwanamke Shupavu 2025",
        meta: "Resilience and bold leadership",
        text: "The site presents this 2025 award as recognition for courage, persistence, and women-led enterprise growth. Public documentation on the exact 2025 award wording is limited, so the description follows the award title you provided and the common Tanzanian use of 'mwanamke shupavu' for resilient, barrier-breaking women.",
        image: "assets/images/details.jpeg",
        alt: "Leah Fashion couture detail image used for the Mwanamke Shupavu award card"
      },
      {
        year: "Founder",
        title: "Cherehani Festival Tanzania",
        meta: "Started from Mwanza",
        text: "Leah Fashion also presents Leah as the founder of Cherehani Festival Tanzania, a creative initiative described by the brand as starting from Mwanza to celebrate fashion skill, visibility, and local design energy.",
        image: "assets/images/designs.jpeg",
        alt: "Leah Fashion occasion-wear image used for the Cherehani Festival Tanzania founder card"
      }
    ]
  },
  catalog: {
    title: "Leah Fashion collections, fittings, and custom design direction",
    intro: "This catalog preview introduces the signature looks Leah Fashion is known for. Open the full catalog page to see ceremony styling, reception looks, fitting notes, and custom design details in a more complete format.",
    items: [
      {
        title: "Bridal Signature",
        subtitle: "Wedding gown collection",
        description: "Graceful bridal silhouettes designed for elegant entrances, flattering structure, supportive fitting, and timeless ceremony presence.",
        image: "assets/images/fitting.jpeg",
        alt: "Bride wearing a fitted white wedding gown outdoors",
        action: "See Collection Details",
        link: "catalog.html#bridal-signature"
      },
      {
        title: "Reception Glow",
        subtitle: "After-dark bridal styling",
        description: "Bold reception styling shaped for glamorous entrances, confident movement, strong photographs, and celebration energy after the ceremony.",
        image: "assets/images/designs.jpeg",
        alt: "Woman wearing a black and gold reception dress",
        action: "Open Reception Details",
        link: "catalog.html#reception-glow"
      },
      {
        title: "Celebration Couture",
        subtitle: "Luxury occasion wear",
        description: "Rich embellished gowns created for introductions, evening receptions, family celebrations, and standout portrait moments.",
        image: "assets/images/details.jpeg",
        alt: "Woman in an embellished orange evening gown",
        action: "Explore Custom Couture",
        link: "catalog.html#celebration-couture"
      }
    ]
  },
  gallery: {
    title: "Studio gallery and recent wedding moments",
    intro: "Browse a quick visual edit here, then open the full gallery page for more images from fittings, finished looks, atelier details, and celebration styling.",
    items: [
      {
        title: "Leah Studio Moment",
        text: "A calm studio portrait that reflects the confidence, tailoring focus, and personal design direction behind each Leah Fashion piece.",
        image: "assets/images/leah.jpeg",
        alt: "Leah Fashion owner in a tailored outfit with measuring tape",
        link: "gallery.html#studio-presence"
      },
      {
        title: "Luxury Detail",
        text: "Intricate beading, warm color, and sculpted finishing come together in a dramatic evening couture look.",
        image: "assets/images/details.jpeg",
        alt: "Woman wearing an embellished orange gown",
        link: "gallery.html#detail-direction"
      },
      {
        title: "Satisfied Fitting",
        text: "A completed fitting captured with joy, comfort, and confidence in the final silhouette.",
        image: "assets/images/satisfied_fitting.jpeg",
        alt: "Smiling woman wearing an orange fitted gown",
        link: "gallery.html#happy-fitting"
      },
      {
        title: "Bridal Grace",
        text: "A clean bridal portrait that highlights fitted shaping, soft lace texture, and a polished wedding finish.",
        image: "assets/images/fitting.jpeg",
        alt: "Bride in a white fitted wedding gown",
        link: "gallery.html#bridal-finish"
      },
      {
        title: "Reception Statement",
        text: "A standout party look with bold contrast, rich texture, and unmistakable celebration energy.",
        image: "assets/images/designs.jpeg",
        alt: "Woman wearing a dramatic black and gold event dress",
        link: "gallery.html#reception-energy"
      }
    ]
  },
  about: {
    title: "A bridal studio shaped with warmth, elegance, and joyful detail",
    story: "Leah Fashion brings together graceful bridal tailoring, a calm fitting atmosphere, and a warm monochromatic presentation that feels polished without becoming heavy. The studio approach is personal, the silhouettes are refined, and each detail is arranged to help clients feel beautiful, happy, and fully seen.",
    quote: "Joyful bridal fashion deserves a calm process, graceful detail, and a finish that feels personal.",
    values: [
      {
        title: "Floral Warmth",
        text: "Soft gold layering, gentle pattern work, and welcoming presentation create a bridal mood that feels bright, feminine, and memorable."
      },
      {
        title: "Happy Fittings",
        text: "The process is designed to keep clients comfortable, celebrated, and clear about what happens next from consultation to final adjustment."
      },
      {
        title: "Monochrome Elegance",
        text: "A restrained gold, cream, and deep neutral palette keeps the brand consistent while giving every dress and portrait stronger visual focus."
      }
    ]
  },
  contact: {
    title: "Plan a fitting or ask about a custom design",
    intro: "Send a bridal inquiry form, request directions, or use the direct contact actions for Leah Fashion in Busweru, Mwanza.",
    cards: [
      {
        title: "Calls & WhatsApp",
        text: "+255 769 727 070"
      },
      {
        title: "Email",
        text: "hello@leahfashion.com"
      },
      {
        title: "Location",
        text: "Leah Fashion Busweru, Mwanza"
      },
      {
        title: "Studio Hours",
        text: "Mon - Thu | 9:00 AM - 6:00 PM, Fri | 9:00 AM - 2:00 PM, Sat - Sun | Closed"
      }
    ],
    call: "+255769727070",
    email: "hello@leahfashion.com",
    whatsapp: "+255769727070",
    locationTitle: "Leah Fashion Busweru Mwanza",
    locationSummary:
      "Visit Leah Fashion Busweru Mwanza for bridal fittings, custom consultations, and wedding styling guidance in a calm studio setting, then use the directions link below to open the route directly in Google Maps.",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Leah+Fashion+Busweru+Mwanza",
    mapEmbed: "https://www.google.com/maps?q=Leah+Fashion+Busweru+Mwanza&output=embed"
  },
  footer: {
    note: "Leah Fashion in Busweru, Mwanza blends award-recognized bridal craftsmanship, warm guidance, and joyful celebration styling.",
    instagram: "https://instagram.com/leahfashion_",
    facebook: "https://facebook.com/leahfashion_",
    tiktok: "https://www.tiktok.com/@leahfashiontz"
  }
};

const siteHeader = document.querySelector(".site-header");
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");
const landingSection = document.getElementById("landing");
const heroCopy = document.querySelector(".hero-copy");
const awardsCarousel = document.getElementById("awards-carousel");
const awardsTrack = document.getElementById("awards-list");
const awardPrevButton = document.getElementById("award-prev");
const awardNextButton = document.getElementById("award-next");
const awardProgress = document.getElementById("award-progress");
const awardsDots = document.getElementById("awards-dots");
const catalogTrack = document.getElementById("catalog-grid");
const catalogDots = document.getElementById("catalog-dots");
const galleryTrack = document.getElementById("gallery-grid");
const galleryDots = document.getElementById("gallery-dots");
const floatingActions = document.getElementById("floating-actions");
const backToTopButton = document.getElementById("back-to-top");
const i18n = window.LeahI18n || null;
let siteContent = clone(defaultContent);
const awardsState = {
  currentIndex: 0,
  total: 0,
  isDesktop: false,
  lastWheelTime: 0,
  autoTimer: null,
  touchStartX: 0
};
const mobileScrollerStates = [];

initialize();

async function initialize() {
  siteContent = await loadContent();
  siteContent = i18n ? i18n.localizeContent(siteContent) : siteContent;
  renderSite();
  if (i18n) {
    i18n.applyPageTranslations("home");
    i18n.mountLanguageMenu();
  }
  setupAwardsCarousel();
  setupMobileScrollers();
  attachEvents();
  observeSections();
}

function attachEvents() {
  navToggle.addEventListener("click", toggleNav);
  siteNav.addEventListener("click", closeNavOnLink);
  document.addEventListener("click", closeNavOnOutsideClick);
  document.addEventListener("keydown", closeNavOnEscape);
  window.addEventListener("scroll", handleViewportEffects, { passive: true });
  window.addEventListener("resize", syncHeroMotion, { passive: true });
  window.addEventListener("resize", syncAwardsCarousel, { passive: true });
  window.addEventListener("resize", syncMobileScrollers, { passive: true });
  if (backToTopButton) {
    backToTopButton.addEventListener("click", scrollToTop);
  }
  const contactForm = document.getElementById("contact-form");
  if (contactForm && !contactForm.dataset.bound) {
    contactForm.addEventListener("submit", submitContactForm);
    contactForm.dataset.bound = "true";
  }
  syncHeaderState();
  syncFloatingActions();
  requestAnimationFrame(() => {
    if (heroCopy) {
      heroCopy.classList.add("is-hero-ready");
      window.setTimeout(syncHeroMotion, 520);
    }
  });
}

function handleViewportEffects() {
  syncHeaderState();
  syncHeroMotion();
  syncFloatingActions();
}

function submitContactForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const status = document.getElementById("contact-form-status");
  const formData = new FormData(form);
  const name = sanitizeLinkValue(formData.get("name"));
  const phone = sanitizeLinkValue(formData.get("phone"));
  const email = sanitizeLinkValue(formData.get("email"));
  const service = sanitizeLinkValue(formData.get("service"));
  const message = sanitizeLinkValue(formData.get("message"));
  const destination = sanitizeLinkValue(siteContent.contact.email) || defaultContent.contact.email;

  if (!name || !phone || !email || !service || !message) {
    if (status) {
      status.textContent = getUiText(
        "inquiryRequired",
        "Complete all fields before sending the inquiry."
      );
    }
    return;
  }

  const subject = encodeURIComponent(
    `${getUiText("inquirySubject", "Leah Fashion Inquiry")} | ${name} | ${service}`
  );
  const body = encodeURIComponent(
    [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      "Inquiry message:",
      message
    ].join("\n")
  );

  if (status) {
    status.textContent = getUiText(
      "inquiryOpening",
      "Opening your email app with the inquiry prepared for Leah Fashion."
    );
  }

  window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
}

function toggleNav(event) {
  event.stopPropagation();
  setNavOpen(!siteNav.classList.contains("is-open"));
}

function setNavOpen(isOpen) {
  siteNav.classList.toggle("is-open", isOpen);
  navToggle.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeNav() {
  setNavOpen(false);
}

function closeNavOnLink(event) {
  if (event.target.tagName === "A") {
    closeNav();
  }
}

function closeNavOnOutsideClick(event) {
  if (!siteNav.classList.contains("is-open")) {
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
  siteHeader.classList.toggle("is-landing", window.scrollY < 28);
}

function syncHeroMotion() {
  if (!heroCopy || !landingSection) {
    return;
  }

  if (!heroCopy.classList.contains("is-hero-ready")) {
    return;
  }

  const rect = landingSection.getBoundingClientRect();
  const distance = Math.max(rect.height * 0.62, 1);
  const progress = clamp(-rect.top / distance, 0, 1);
  const opacity = 1 - progress * 1.15;
  const translateY = progress * 68;
  const scale = 1 - progress * 0.08;
  const blur = progress * 8;

  heroCopy.style.opacity = String(clamp(opacity, 0, 1));
  heroCopy.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
  heroCopy.style.filter = `blur(${blur}px)`;
}

function syncFloatingActions() {
  if (!floatingActions) {
    return;
  }

  floatingActions.classList.toggle("is-visible", window.scrollY > 120);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function renderSite() {
  applyTheme();
  setText("brand-name", siteContent.brand.name);
  setText("footer-brand", siteContent.brand.name);
  setText("brand-tagline", siteContent.brand.tagline);

  const brandLogo = document.getElementById("brand-logo");
  brandLogo.src = siteContent.brand.logo;
  brandLogo.alt = `${siteContent.brand.name} logo`;

  const footerLogo = document.getElementById("footer-logo");
  if (footerLogo) {
    footerLogo.src = siteContent.brand.logo;
    footerLogo.alt = `${siteContent.brand.name} logo`;
  }

  const heroBackdrop = document.getElementById("hero-backdrop");
  if (heroBackdrop) {
    heroBackdrop.style.backgroundImage = `url("${siteContent.hero.image}")`;
  }

  const siteFooter = document.querySelector(".site-footer");
  if (siteFooter) {
    siteFooter.style.backgroundImage = `url("${siteContent.hero.image}")`;
  }
  setText("hero-eyebrow", siteContent.hero.eyebrow);
  renderHeroTitle("hero-title", siteContent.hero.title);
  setText("hero-text", siteContent.hero.text);
  setText(
    "hero-badge-text",
    siteContent.hero.badgeText ||
      "Custom bridal design, refined fittings, and celebration styling shaped in Leah Fashion's warm studio process."
  );

  setText("hero-contact-button", getUiText("contactUs", "Contact Us"));

  setText("why-title", siteContent.whyUs.title);
  setText("why-intro", siteContent.whyUs.intro);
  setText("awards-title", siteContent.whyUs.awardsTitle);
  renderCards(
    document.getElementById("why-pillars"),
    siteContent.whyUs.pillars,
    (item, index) => `
      <article class="why-card">
        <div class="why-card-head">
          <span class="why-count">${String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `
  );

  renderCards(
    document.getElementById("awards-list"),
    siteContent.whyUs.awards,
    (item, index) => `
      <article class="award-card">
        <div class="award-media-frame">
          <img
            src="${escapeAttribute(getAwardImage(item, index))}"
            alt="${escapeAttribute(getAwardAlt(item, index))}"
            loading="lazy"
          />
          <span class="award-mark">${escapeHtml(getUiText("awardMark", "Award"))}</span>
        </div>
        <div class="award-card-body">
          <div class="award-card-head">
            <span class="award-year">${escapeHtml(item.year)}</span>
            <span class="award-issued">${escapeHtml(item.meta || getUiText("presentedIn", `Presented in ${item.year}`, { year: item.year }))}</span>
          </div>
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.text)}</p>
        </div>
      </article>
    `
  );

  setText("catalog-title", siteContent.catalog.title);
  setText("catalog-intro", siteContent.catalog.intro);
  renderCards(
    document.getElementById("catalog-grid"),
    siteContent.catalog.items,
    (item) => `
      <a class="catalog-card catalog-card-link" href="${escapeAttribute(item.link || "catalog.html")}">
        <div class="media-frame">
          <img src="${escapeAttribute(item.image)}" alt="${escapeAttribute(item.alt || item.title)}" loading="lazy" />
        </div>
        <div class="catalog-copy">
          <p class="mini-label">${escapeHtml(item.subtitle)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </div>
      </a>
    `
  );

  setText("gallery-title", siteContent.gallery.title);
  setText("gallery-intro", siteContent.gallery.intro);
  renderCards(
    document.getElementById("gallery-grid"),
    siteContent.gallery.items,
    (item) => `
      <a class="gallery-card gallery-card-link" href="${escapeAttribute(item.link || "gallery.html")}">
        <div class="media-frame">
          <img src="${escapeAttribute(item.image)}" alt="${escapeAttribute(item.alt || item.title)}" loading="lazy" />
        </div>
        <div class="gallery-copy">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </div>
      </a>
    `
  );

  setText("about-title", siteContent.about.title);
  setText("about-story", siteContent.about.story);
  setText("about-quote", siteContent.about.quote);
  renderCards(
    document.getElementById("values-list"),
    siteContent.about.values,
    (item, index) => `
      <div class="value-item">
        <div class="value-item-header">
          <span class="value-icon" aria-hidden="true">${getAboutIcon(index)}</span>
          <div>
            <span class="value-kicker">${escapeHtml(getAboutKicker(index))}</span>
            <h3>${escapeHtml(item.title)}</h3>
          </div>
        </div>
        <p>${escapeHtml(item.text)}</p>
      </div>
    `
  );

  setText("contact-title", siteContent.contact.title);
  setText("contact-intro", siteContent.contact.intro);
  const visibleContactCards = (siteContent.contact.cards || []).filter(
    (item) => !isPrimaryContactCard(item)
  );
  renderCards(
    document.getElementById("contact-cards"),
    visibleContactCards,
    (item) => `
      <div class="contact-card">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </div>
    `
  );

  const locationCardText = getContactCardText(
    siteContent.contact.cards,
    ["location"],
    defaultContent.contact.cards[2].text
  );
  const hoursCardText = getContactCardText(
    siteContent.contact.cards,
    ["studio hours", "working hours", "hours"],
    defaultContent.contact.cards[3].text
  );

  setText("location-title", siteContent.contact.locationTitle || locationCardText);
  setText("location-summary", siteContent.contact.locationSummary);
  setText("location-address", locationCardText);
  setText("location-hours", hoursCardText);
  setText("contact-form-email", siteContent.contact.email);

  const locationMap = document.getElementById("location-map");
  if (locationMap) {
    locationMap.src = siteContent.contact.mapEmbed || defaultContent.contact.mapEmbed;
  }

  const contactMessageInput = document.getElementById("contact-message-input");
  if (
    contactMessageInput &&
    (!sanitizeLinkValue(contactMessageInput.value) ||
      sanitizeLinkValue(contactMessageInput.value) ===
        "Hello Leah Fashion,\n\nI found you on the website and I would like to ask about my bridal design / fitting request.\n\nEvent date:\nPreferred style:\nMore details:")
  ) {
    contactMessageInput.value = getDefaultInquiryMessage();
  }

  const callLink = document.getElementById("contact-call-link");
  callLink.href = `tel:${sanitizeLinkValue(siteContent.contact.call)}`;

  const emailLink = document.getElementById("contact-email-link");
  emailLink.href = `mailto:${sanitizeLinkValue(siteContent.contact.email)}?subject=${encodeURIComponent(
    getUiText("inquirySubject", "Leah Fashion Inquiry")
  )}&body=${encodeURIComponent(getDefaultInquiryMessage())}`;

  const whatsappLink = document.getElementById("contact-whatsapp-link");
  whatsappLink.href = buildWhatsappUrl(
    siteContent.contact.whatsapp,
    getDefaultInquiryMessage()
  );
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noreferrer";

  const directionsLink = document.getElementById("contact-directions-link");
  if (directionsLink) {
    directionsLink.href =
      sanitizeLinkValue(siteContent.contact.directionsUrl) ||
      defaultContent.contact.directionsUrl;
    directionsLink.target = "_blank";
    directionsLink.rel = "noreferrer";
  }

  const floatingWhatsapp = document.getElementById("floating-whatsapp");
  floatingWhatsapp.href = buildWhatsappUrl(
    siteContent.contact.whatsapp,
    getDefaultInquiryMessage()
  );
  floatingWhatsapp.target = "_blank";
  floatingWhatsapp.rel = "noreferrer";

  setText("footer-note", siteContent.footer.note);
  document.getElementById("instagram-link").href = siteContent.footer.instagram || "#";
  document.getElementById("facebook-link").href = siteContent.footer.facebook || "#";
  const tiktokLink = document.getElementById("tiktok-link");
  if (tiktokLink) {
    tiktokLink.href = siteContent.footer.tiktok || "#";
  }
}

function observeSections() {
  const links = Array.from(document.querySelectorAll(".site-nav a"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const revealTargets = document.querySelectorAll(
    ".section-heading, .why-card, .awards-carousel, .catalog-card, .gallery-card, .about-card, .contact-panel, .location-panel, .location-map-card, .footer-shell"
  );

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        links.forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    {
      threshold: 0.38
    }
  );

  sections.forEach((section) => navObserver.observe(section));

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -6% 0px"
    }
  );

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal-up");
    element.style.transitionDelay = `${Math.min((index % 4) * 70, 210)}ms`;
    revealObserver.observe(element);
  });

  handleViewportEffects();
}

function setupAwardsCarousel() {
  if (!awardsCarousel || !awardsTrack) {
    return;
  }

  awardsState.total = awardsTrack.children.length;
  awardsState.currentIndex = Math.min(
    awardsState.currentIndex,
    Math.max(awardsState.total - 1, 0)
  );

  if (awardPrevButton && !awardPrevButton.dataset.bound) {
    awardPrevButton.addEventListener("click", () => moveAwardSlide(-1));
    awardPrevButton.dataset.bound = "true";
  }

  if (awardNextButton && !awardNextButton.dataset.bound) {
    awardNextButton.addEventListener("click", () => moveAwardSlide(1));
    awardNextButton.dataset.bound = "true";
  }

  const viewport = awardsCarousel.querySelector(".awards-viewport");
  if (viewport && !viewport.dataset.bound) {
    viewport.addEventListener("wheel", handleAwardsWheel, { passive: false });
    viewport.addEventListener(
      "touchstart",
      (event) => {
        awardsState.touchStartX = event.touches[0]?.clientX || 0;
      },
      { passive: true }
    );
    viewport.addEventListener(
      "touchend",
      (event) => {
        const touchEndX = event.changedTouches[0]?.clientX || awardsState.touchStartX;
        const deltaX = touchEndX - awardsState.touchStartX;
        if (Math.abs(deltaX) > 42 && isMobileCarouselViewport()) {
          setAwardIndex(
            deltaX < 0
              ? (awardsState.currentIndex + 1) % Math.max(awardsState.total, 1)
              : (awardsState.currentIndex - 1 + awardsState.total) % Math.max(awardsState.total, 1)
          );
          pauseAwardsAutoplay();
        }
      },
      { passive: true }
    );
    viewport.dataset.bound = "true";
  }

  syncAwardsCarousel();
}

function syncAwardsCarousel() {
  if (!awardsCarousel || !awardsTrack) {
    return;
  }

  awardsState.total = awardsTrack.children.length;
  awardsState.isDesktop = window.matchMedia("(min-width: 981px)").matches;
  awardsState.currentIndex = clamp(
    awardsState.currentIndex,
    0,
    Math.max(awardsState.total - 1, 0)
  );

  awardsTrack.style.setProperty("--awards-index", String(awardsState.currentIndex));
  awardsCarousel.classList.toggle("is-desktop-slider", awardsState.isDesktop);
  renderCarouselDots(awardsDots, awardsState.total, awardsState.currentIndex, (index) => {
    setAwardIndex(index);
    pauseAwardsAutoplay();
  });

  if (awardProgress) {
    awardProgress.textContent = `${String(awardsState.currentIndex + 1).padStart(2, "0")} / ${String(
      Math.max(awardsState.total, 1)
    ).padStart(2, "0")}`;
  }

  if (awardPrevButton) {
    awardPrevButton.disabled = awardsState.currentIndex <= 0;
  }

  if (awardNextButton) {
    awardNextButton.disabled = awardsState.currentIndex >= awardsState.total - 1;
  }

  syncAwardsAutoplay();
}

function moveAwardSlide(step) {
  const nextIndex = clamp(awardsState.currentIndex + step, 0, Math.max(awardsState.total - 1, 0));

  if (nextIndex === awardsState.currentIndex) {
    return;
  }

  setAwardIndex(nextIndex);
}

function setAwardIndex(index) {
  awardsState.currentIndex = clamp(index, 0, Math.max(awardsState.total - 1, 0));
  syncAwardsCarousel();
}

function handleAwardsWheel(event) {
  if (!awardsState.isDesktop || awardsState.total < 2) {
    return;
  }

  const horizontalDelta =
    Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ? event.deltaX
      : event.shiftKey
        ? event.deltaY
        : 0;

  if (Math.abs(horizontalDelta) < 18) {
    return;
  }

  const direction = horizontalDelta > 0 ? 1 : -1;
  const nextIndex = clamp(
    awardsState.currentIndex + direction,
    0,
    Math.max(awardsState.total - 1, 0)
  );

  if (nextIndex === awardsState.currentIndex) {
    return;
  }

  const now = Date.now();
  if (now - awardsState.lastWheelTime < 520) {
    event.preventDefault();
    return;
  }

  event.preventDefault();
  awardsState.lastWheelTime = now;
  setAwardIndex(nextIndex);
}

function syncAwardsAutoplay() {
  if (awardsState.autoTimer) {
    window.clearInterval(awardsState.autoTimer);
    awardsState.autoTimer = null;
  }

  if (!isMobileCarouselViewport() || awardsState.total < 2) {
    return;
  }

  awardsState.autoTimer = window.setInterval(() => {
    if (Date.now() < awardsState.lastWheelTime + 6500) {
      return;
    }

    setAwardIndex((awardsState.currentIndex + 1) % awardsState.total);
  }, 4200);
}

function pauseAwardsAutoplay() {
  awardsState.lastWheelTime = Date.now();
}

function setupMobileScrollers() {
  mobileScrollerStates.forEach((state) => {
    if (!state.track || state.track.dataset.mobileCarouselBound) {
      return;
    }

    state.track.addEventListener(
      "scroll",
      () => {
        if (!isMobileCarouselViewport()) {
          return;
        }

        updateMobileScrollerIndex(state);
      },
      { passive: true }
    );

    state.track.addEventListener(
      "touchstart",
      () => {
        pauseMobileScroller(state);
      },
      { passive: true }
    );

    state.track.addEventListener(
      "pointerdown",
      () => {
        pauseMobileScroller(state);
      },
      { passive: true }
    );

    state.track.dataset.mobileCarouselBound = "true";
    setupManualScrollerDrag(state);
  });

  syncMobileScrollers();
}

function setupManualScrollerDrag(state) {
  if (!state.track || state.track.dataset.manualDragBound) {
    return;
  }

  let isDragging = false;
  let pointerId = null;
  let startX = 0;
  let startScrollLeft = 0;

  state.track.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    isDragging = true;
    pointerId = event.pointerId;
    startX = event.clientX;
    startScrollLeft = state.track.scrollLeft;
    state.track.classList.add("is-dragging");
    pauseMobileScroller(state);
    state.track.setPointerCapture?.(pointerId);
    event.preventDefault();
  });

  state.track.addEventListener("pointermove", (event) => {
    if (!isDragging || event.pointerId !== pointerId) {
      return;
    }

    const deltaX = event.clientX - startX;
    state.track.scrollLeft = startScrollLeft - deltaX;
    event.preventDefault();
  });

  const stopDrag = (event) => {
    if (!isDragging || (event.pointerId !== undefined && event.pointerId !== pointerId)) {
      return;
    }

    isDragging = false;
    state.track.classList.remove("is-dragging");
    if (pointerId !== null) {
      state.track.releasePointerCapture?.(pointerId);
    }
    pointerId = null;
  };

  state.track.addEventListener("pointerup", stopDrag);
  state.track.addEventListener("pointercancel", stopDrag);
  state.track.addEventListener("pointerleave", stopDrag);

  state.track.dataset.manualDragBound = "true";
}

function syncMobileScrollers() {
  mobileScrollerStates.forEach((state) => {
    if (!state.track) {
      return;
    }

    const cards = getScrollerCards(state);
    state.currentIndex = clamp(state.currentIndex, 0, Math.max(cards.length - 1, 0));

    if (isMobileCarouselViewport()) {
      renderCarouselDots(state.dots, cards.length, state.currentIndex, (index) => {
        scrollMobileScrollerToIndex(state, index, true);
        pauseMobileScroller(state);
      });
      scrollMobileScrollerToIndex(state, state.currentIndex, false);
      startMobileScrollerAutoplay(state);
      return;
    }

    stopMobileScrollerAutoplay(state);
    renderCarouselDots(state.dots, 0, 0, () => {});
  });
}

function getScrollerCards(state) {
  return Array.from(state.track?.querySelectorAll(state.selector) || []);
}

function updateMobileScrollerIndex(state) {
  const cards = getScrollerCards(state);
  if (!cards.length) {
    return;
  }

  const trackLeft = state.track.scrollLeft;
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  cards.forEach((card, index) => {
    const distance = Math.abs(card.offsetLeft - trackLeft);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  if (closestIndex !== state.currentIndex) {
    state.currentIndex = closestIndex;
    renderCarouselDots(state.dots, cards.length, state.currentIndex, (index) => {
      scrollMobileScrollerToIndex(state, index, true);
      pauseMobileScroller(state);
    });
  }
}

function scrollMobileScrollerToIndex(state, index, smooth) {
  const cards = getScrollerCards(state);
  if (!cards.length) {
    return;
  }

  state.currentIndex = clamp(index, 0, cards.length - 1);
  const target = cards[state.currentIndex];
  state.track.scrollTo({
    left: target.offsetLeft,
    behavior: smooth ? "smooth" : "auto"
  });
  renderCarouselDots(state.dots, cards.length, state.currentIndex, (dotIndex) => {
    scrollMobileScrollerToIndex(state, dotIndex, true);
    pauseMobileScroller(state);
  });
}

function startMobileScrollerAutoplay(state) {
  stopMobileScrollerAutoplay(state);

  const cards = getScrollerCards(state);
  if (!isMobileCarouselViewport() || cards.length < 2) {
    return;
  }

  state.autoTimer = window.setInterval(() => {
    if (Date.now() < state.pauseUntil) {
      return;
    }

    const nextIndex = (state.currentIndex + 1) % cards.length;
    scrollMobileScrollerToIndex(state, nextIndex, true);
  }, 4200);
}

function stopMobileScrollerAutoplay(state) {
  if (state.autoTimer) {
    window.clearInterval(state.autoTimer);
    state.autoTimer = null;
  }
}

function pauseMobileScroller(state) {
  state.pauseUntil = Date.now() + 6500;
}

function getDefaultInquiryMessage() {
  return [
    getUiText("inquiryGreeting", `Hello ${siteContent.brand.name},`, {
      name: siteContent.brand.name
    }),
    "",
    getUiText(
      "inquiryLead",
      "I found you on the website and I would like to ask about my bridal design / fitting request."
    ),
    "",
    getUiText("eventDate", "Event date:"),
    getUiText("preferredStyle", "Preferred style:"),
    getUiText("moreDetails", "More details:")
  ].join("\n");
}

function buildWhatsappUrl(number, message) {
  const digits = digitsOnly(number);
  const text = sanitizeLinkValue(message);
  return text ? `https://wa.me/${digits}?text=${encodeURIComponent(text)}` : `https://wa.me/${digits}`;
}

function renderCarouselDots(container, total, activeIndex, onSelect) {
  if (!container) {
    return;
  }

  if (!total || total < 2) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = Array.from({ length: total }, (_, index) => {
    const isActive = index === activeIndex;
    return `
      <button
        class="carousel-dot${isActive ? " is-active" : ""}"
        type="button"
        data-index="${index}"
        aria-label="${escapeAttribute(getUiText("slideLabel", `Go to slide ${index + 1}`, { index: index + 1 }))}"
        aria-pressed="${isActive ? "true" : "false"}"
      ></button>
    `;
  }).join("");

  container.querySelectorAll(".carousel-dot").forEach((button) => {
    button.addEventListener("click", () => {
      onSelect(Number(button.dataset.index));
    });
  });
}

function applyTheme() {
  const root = document.documentElement;
  root.style.setProperty("--accent", siteContent.theme.accent);
  root.style.setProperty("--accent-deep", siteContent.theme.accentDeep);
  root.style.setProperty("--canvas", siteContent.theme.canvas);
  root.style.setProperty("--surface-strong", siteContent.theme.surface);
  root.style.setProperty("--ink", siteContent.theme.ink);
  root.style.setProperty("--muted", siteContent.theme.muted);
  root.style.setProperty(
    "--heading-font",
    FONT_OPTIONS[siteContent.brand.headingFont] || FONT_OPTIONS["Cormorant Garamond"]
  );
  root.style.setProperty(
    "--display-font",
    FONT_OPTIONS[siteContent.brand.headingFont] || FONT_OPTIONS["Cormorant Garamond"]
  );
  root.style.setProperty(
    "--body-font",
    FONT_OPTIONS[siteContent.brand.bodyFont] || FONT_OPTIONS["Plus Jakarta Sans"]
  );
}

async function loadContent() {
  try {
    const response = await fetch("/api/public/site", {
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Public API returned ${response.status}`);
    }

    const payload = await response.json();
    const merged = mergeWithDefaults(defaultContent, payload.content || {});

    if (isLegacyTheme(merged.theme)) {
      merged.theme = { ...defaultContent.theme };
    }

    merged.brand.headingFont = defaultContent.brand.headingFont;
    merged.brand.bodyFont = defaultContent.brand.bodyFont;

    if (
      !merged.hero.title ||
      merged.hero.title === "Wedding fashion shaped with joy, grace, and confidence." ||
      merged.hero.title === "Leah Fashion wedding couture for joyful entrances."
    ) {
      merged.hero.title = defaultContent.hero.title;
    }

    if (
      !merged.hero.text ||
      merged.hero.text ===
        "From bridal gowns to reception looks, Leah Fashion creates custom pieces with elegant detail, confident tailoring, and joyful final presentation." ||
      merged.hero.text ===
        "Leah shapes wedding gowns, reception looks, and custom fittings with polished detail, elegant structure, and a warm studio experience."
    ) {
      merged.hero.text = defaultContent.hero.text;
    }

    if (!merged.hero.portraitLabel || merged.hero.portraitLabel === "Leah Atelier") {
      merged.hero.portraitLabel = defaultContent.hero.portraitLabel;
    }

    if (
      !merged.hero.badgeText ||
      merged.hero.badgeText ===
        "Leah guides each wedding look from concept to final fitting with a polished, joyful finish." ||
      merged.hero.badgeText ===
        "Custom bridal design, occasion wear, and premium fitting by Leah Fashion."
    ) {
      merged.hero.badgeText = defaultContent.hero.badgeText;
    }

    if (merged.hero.image === "assets/images/brand/leah-fashion-logo.png") {
      merged.hero = clone(defaultContent.hero);
    }

    if (
      !merged.whyUs.intro ||
      merged.whyUs.intro ===
        "We keep the experience simple, elegant, and stress-light. Every collection is presented in a focused way so visitors find what matters quickly without visual overload." ||
      merged.whyUs.intro ===
        "Clients choose Leah Fashion because the studio combines calm guidance, fitting accuracy, and a polished wedding finish. Every stage, from consultation to final adjustment, is explained clearly so brides and families feel relaxed, informed, and confident in the final look."
    ) {
      merged.whyUs.intro = defaultContent.whyUs.intro;
    }

    if (
      !merged.whyUs.awardsTitle ||
      merged.whyUs.awardsTitle === "Recognized craftsmanship and service" ||
      merged.whyUs.awardsTitle === "Awards and recognition earned through bridal craftsmanship"
    ) {
      merged.whyUs.awardsTitle = defaultContent.whyUs.awardsTitle;
    }

    if (
      Array.isArray(merged.whyUs.pillars) &&
      merged.whyUs.pillars.length === 4 &&
      merged.whyUs.pillars.every((item, index) =>
        [
          "Guided Consultations",
          "Tailored Finishing",
          "Joyful Fittings",
          "Recognized Craft"
        ][index] === item.title
      )
    ) {
      merged.whyUs.pillars = clone(defaultContent.whyUs.pillars);
    }

    if (
      Array.isArray(merged.whyUs.awards) &&
      (
        (merged.whyUs.awards.length === 4 &&
          merged.whyUs.awards.every((item, index) =>
            [
              "Bridal Style Excellence",
              "Client Choice Studio",
              "Creative Wedding Couture",
              "Emerging Fashion House"
            ][index] === item.title
          )) ||
        (merged.whyUs.awards.length === 6 &&
          merged.whyUs.awards.every((item, index) =>
            [
              "Bridal Style Excellence",
              "Client Choice Studio",
              "Creative Wedding Couture",
              "Emerging Fashion House",
              "Elegant Occasion Wear Recognition",
              "Fashion Craft Merit"
            ][index] === item.title
          ))
      )
    ) {
      merged.whyUs.awards = clone(defaultContent.whyUs.awards);
    }

    if (
      !merged.catalog.title ||
      merged.catalog.title === "Selected collections for bridal and event moments"
    ) {
      merged.catalog.title = defaultContent.catalog.title;
    }

    if (
      !merged.catalog.intro ||
      merged.catalog.intro ===
        "Explore Leah Fashion collections for weddings, receptions, and coordinated celebration wear."
    ) {
      merged.catalog.intro = defaultContent.catalog.intro;
    }

    if (
      Array.isArray(merged.catalog.items) &&
      merged.catalog.items.length === 3 &&
      merged.catalog.items.every((item, index) =>
        ["Book Fitting", "View Style", "Request Design"][index] === item.action
      )
    ) {
      merged.catalog.items = clone(defaultContent.catalog.items);
    }

    if (
      !merged.gallery.title ||
      merged.gallery.title === "Recent moments from the Leah Fashion studio"
    ) {
      merged.gallery.title = defaultContent.gallery.title;
    }

    if (
      !merged.gallery.intro ||
      merged.gallery.intro ===
        "A calm visual gallery keeps browsing easy while still showing richness in texture, detail, and joyful wedding mood."
    ) {
      merged.gallery.intro = defaultContent.gallery.intro;
    }

    if (
      !merged.about.title ||
      merged.about.title === "A bridal studio built for beauty and clarity"
    ) {
      merged.about.title = defaultContent.about.title;
    }

    if (
      !merged.about.story ||
      merged.about.story ===
        "Leah Fashion is shaped around elegant bridal wear, warm client care, and a presentation style that keeps visitors focused. The layout uses clear hierarchy, readable typography, and generous spacing so people enjoy the journey without cognitive load."
    ) {
      merged.about.story = defaultContent.about.story;
    }

    if (
      !merged.about.quote ||
      merged.about.quote ===
        "Beautiful fashion should feel easy to explore and unforgettable to wear."
    ) {
      merged.about.quote = defaultContent.about.quote;
    }

    if (
      Array.isArray(merged.about.values) &&
      merged.about.values.length === 3 &&
      merged.about.values.every((item, index) =>
        ["Readable design", "Friendly navigation", "Refined presentation"][index] === item.title
      )
    ) {
      merged.about.values = clone(defaultContent.about.values);
    }

    if (
      !merged.contact.intro ||
      merged.contact.intro === "Invite clients to call, email, or chat directly with the Leah Fashion studio." ||
      merged.contact.intro ===
        "Call, WhatsApp, or request directions directly to Leah Fashion in Busweru, Mwanza."
    ) {
      merged.contact.intro = defaultContent.contact.intro;
    }

    if (
      Array.isArray(merged.contact.cards) &&
      merged.contact.cards[0] &&
      merged.contact.cards[0].text === "+255 700 123 456"
    ) {
      merged.contact.cards[0].text = defaultContent.contact.cards[0].text;
      merged.contact.cards[0].title = defaultContent.contact.cards[0].title;
    }

    if (
      Array.isArray(merged.contact.cards) &&
      merged.contact.cards[2] &&
      (merged.contact.cards[2].text === "Dar es Salaam, Tanzania" ||
        merged.contact.cards[2].text === "Buswelu, Mwanza")
    ) {
      merged.contact.cards[2].text = defaultContent.contact.cards[2].text;
    }

    if (
      Array.isArray(merged.contact.cards) &&
      merged.contact.cards[3] &&
      merged.contact.cards[3].text === "Mon - Sat | 9:00 AM - 6:00 PM"
    ) {
      merged.contact.cards[3].text = defaultContent.contact.cards[3].text;
    }

    if (
      !merged.contact.call ||
      merged.contact.call === "+255700123456"
    ) {
      merged.contact.call = defaultContent.contact.call;
    }

    if (
      !merged.contact.whatsapp ||
      merged.contact.whatsapp === "+255700123456"
    ) {
      merged.contact.whatsapp = defaultContent.contact.whatsapp;
    }

    if (
      !merged.contact.locationTitle ||
      merged.contact.locationTitle === "Dar es Salaam, Tanzania" ||
      merged.contact.locationTitle === "Buswelu, Mwanza"
    ) {
      merged.contact.locationTitle = defaultContent.contact.locationTitle;
    }

    if (
      !merged.contact.locationSummary ||
      merged.contact.locationSummary === "Visit the Leah Fashion studio for fittings and custom consultations." ||
      merged.contact.locationSummary ===
        "Visit Leah Fashion in Buswelu, Mwanza for bridal fittings, custom consultations, and wedding styling guidance in a calm studio setting."
    ) {
      merged.contact.locationSummary = defaultContent.contact.locationSummary;
    }

    if (
      !merged.contact.directionsUrl ||
      merged.contact.directionsUrl ===
        "https://www.google.com/maps/dir/?api=1&destination=Buswelu,+Mwanza"
    ) {
      merged.contact.directionsUrl = defaultContent.contact.directionsUrl;
    }

    if (
      !merged.contact.mapEmbed ||
      merged.contact.mapEmbed === "https://www.google.com/maps?q=Buswelu,+Mwanza&output=embed"
    ) {
      merged.contact.mapEmbed = defaultContent.contact.mapEmbed;
    }

  if (
    !merged.footer.note ||
    merged.footer.note ===
      "Leah Fashion creates wedding looks with refined craft, joyful energy, and client-friendly presentation." ||
    merged.footer.note ===
      "Leah Fashion blends warm guidance, bridal craftsmanship, and celebration styling for elegant wedding moments."
    ) {
      merged.footer.note = defaultContent.footer.note;
    }

    if (!merged.footer.instagram || merged.footer.instagram === "https://instagram.com/leahfashion") {
      merged.footer.instagram = defaultContent.footer.instagram;
    }

    if (!merged.footer.facebook || merged.footer.facebook === "https://facebook.com/leahfashion") {
      merged.footer.facebook = defaultContent.footer.facebook;
    }

    if (!merged.footer.tiktok) {
      merged.footer.tiktok = defaultContent.footer.tiktok;
    }

    if (
      Array.isArray(merged.catalog.items) &&
      merged.catalog.items.every((item) => item.image === "assets/images/brand/leah-fashion-logo.png")
    ) {
      merged.catalog.items = clone(defaultContent.catalog.items);
    }

    if (
      Array.isArray(merged.gallery.items) &&
      merged.gallery.items.every((item) => item.image === "assets/images/brand/leah-fashion-logo.png")
    ) {
      merged.gallery.items = clone(defaultContent.gallery.items);
    }

    return merged;
  } catch (error) {
    return clone(defaultContent);
  }
}

function isLegacyTheme(theme) {
  return (
    theme &&
    theme.accent === LEGACY_THEME.accent &&
    theme.accentDeep === LEGACY_THEME.accentDeep &&
    theme.canvas === LEGACY_THEME.canvas &&
    theme.surface === LEGACY_THEME.surface &&
    theme.ink === LEGACY_THEME.ink &&
    theme.muted === LEGACY_THEME.muted
  );
}

function renderCards(node, items, template) {
  if (!node) {
    return;
  }

  node.innerHTML = items.map(template).join("");
}

function getAboutKicker(index) {
  const translatedKickers = getUiText("aboutKickers", ["Bloom", "Joy", "Grace"]);
  return translatedKickers[index] || "Leah Fashion";
}

function getAboutIcon(index) {
  const icons = [
    `
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 10c2.6 4.8 2.6 8.4 0 10.8-2.6-2.4-2.6-6 0-10.8Z" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 38c-2.6-4.8-2.6-8.4 0-10.8 2.6 2.4 2.6 6 0 10.8Z" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 24c4.8-2.6 8.4-2.6 10.8 0-2.4 2.6-6 2.6-10.8 0Z" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M38 24c-4.8 2.6-8.4 2.6-10.8 0 2.4-2.6 6-2.6 10.8 0Z" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="24" cy="24" r="4.5" stroke="currentColor" stroke-width="2.2"/>
      </svg>
    `,
    `
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 11l2.9 8.1L35 22l-8.1 2.9L24 33l-2.9-8.1L13 22l8.1-2.9L24 11Z" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M36 10l1.1 3.1L40 14l-2.9 0.9L36 18l-1.1-3.1L32 14l2.9-0.9L36 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13 30l1.2 3.2L17 34l-2.8 0.8L13 38l-1.2-3.2L9 34l2.8-0.8L13 30Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    `
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 11c2.8 0 5.2 2.3 5.2 5.2v4.2H16c-2.9 0-5.2-2.3-5.2-5.2S13.1 11 16 11h-.9Z" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33 11c-2.8 0-5.2 2.3-5.2 5.2v4.2H32c2.9 0 5.2-2.3 5.2-5.2S34.9 11 32 11h1Z" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 24h16v2.8c0 6.3-3.6 10.5-8 10.5s-8-4.2-8-10.5V24Z" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
  ];

  return icons[index] || icons[0];
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.textContent = value || "";
}

function renderHeroTitle(id, value) {
  const element = document.getElementById(id);
  const title = String(value || "").trim();

  if (!element) {
    return;
  }

  if (!title) {
    element.textContent = "";
    return;
  }

  const words = title.split(/\s+/);

  if (words.length < 2) {
    element.textContent = title;
    return;
  }

  const firstWord = words.shift();
  const lastWord = words.pop();
  const middle = words.join(" ");

  element.innerHTML = [
    `<span class="hero-title-highlight">${escapeHtml(firstWord)}</span>`,
    middle ? escapeHtml(middle) : "",
    `<span class="hero-title-highlight">${escapeHtml(lastWord)}</span>`
  ]
    .filter(Boolean)
    .join(" ");
}

function mergeWithDefaults(defaultValue, storedValue) {
  if (Array.isArray(defaultValue)) {
    if (!Array.isArray(storedValue)) {
      return clone(defaultValue);
    }

    return storedValue.map((item, index) => {
      const template =
        index < defaultValue.length ? defaultValue[index] : defaultValue[defaultValue.length - 1];
      return mergeWithDefaults(template, item);
    });
  }

  if (defaultValue && typeof defaultValue === "object") {
    const merged = {};
    const source =
      storedValue && typeof storedValue === "object" && !Array.isArray(storedValue)
        ? storedValue
        : {};

    Object.keys(defaultValue).forEach((key) => {
      merged[key] = mergeWithDefaults(defaultValue[key], source[key]);
    });

    Object.keys(source).forEach((key) => {
      if (!(key in merged)) {
        merged[key] = source[key];
      }
    });

    return merged;
  }

  return storedValue ?? defaultValue;
}

function isMobileCarouselViewport() {
  return window.matchMedia("(max-width: 720px)").matches;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function getAwardImage(item, index) {
  return item.image || AWARD_IMAGE_FALLBACKS[index % AWARD_IMAGE_FALLBACKS.length].image;
}

function getAwardAlt(item, index) {
  return item.alt || AWARD_IMAGE_FALLBACKS[index % AWARD_IMAGE_FALLBACKS.length].alt;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function isPrimaryContactCard(item) {
  const title = String(item?.title || "").toLowerCase();
  return title.includes("phone") || title.includes("call") || title.includes("whatsapp");
}

function getContactCardText(cards, aliases, fallback) {
  const match = (cards || []).find((item) => {
    const title = String(item?.title || "").toLowerCase();
    return aliases.some((alias) => title.includes(alias));
  });

  return sanitizeLinkValue(match?.text) || fallback;
}

function sanitizeLinkValue(value) {
  return String(value || "").trim();
}

function digitsOnly(value) {
  return String(value || "").replace(/\D/g, "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function getUiText(key, fallback, tokens) {
  if (!i18n || typeof i18n.t !== "function") {
    return fallback;
  }

  const translated = i18n.t(key, tokens);

  if (Array.isArray(fallback)) {
    return Array.isArray(translated) && translated.length ? translated : fallback;
  }

  return translated || fallback;
}
