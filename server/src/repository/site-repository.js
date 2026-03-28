"use strict";

const defaultContent = require("../config/default-content");
const { getPool } = require("../db");

const LEGACY_THEME = {
  accent: "#d4a95a",
  accentDeep: "#93672e",
  canvas: "#fbf5ec",
  surface: "#fffaf2",
  ink: "#23150b",
  muted: "#75634d"
};

async function getSiteContent() {
  const [rows] = await getPool().execute(
    "SELECT content FROM site_content WHERE slug = ? LIMIT 1",
    ["main"]
  );

  if (!rows.length) {
    return defaultContent;
  }

  return normalizeSiteContent(rows[0].content);
}

async function saveSiteContent(content) {
  await getPool().execute(
    `
      INSERT INTO site_content (slug, content)
      VALUES (?, ?)
      ON DUPLICATE KEY UPDATE content = VALUES(content)
    `,
    ["main", JSON.stringify(content)]
  );

  return content;
}

async function findAdminByUsername(username) {
  const [rows] = await getPool().execute(
    "SELECT id, username, password_hash, full_name FROM admins WHERE username = ? LIMIT 1",
    [username]
  );

  return rows[0] || null;
}

function normalizeSiteContent(content) {
  const merged = mergeWithDefaults(defaultContent, content || {});

  if (isLegacyTheme(merged.theme)) {
    merged.theme = clone(defaultContent.theme);
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
      "We keep the experience simple, elegant, and stress-light. Every collection is presented in a focused way so visitors find what matters quickly without visual overload."
  ) {
    merged.whyUs.intro = defaultContent.whyUs.intro;
  }

  if (
    !merged.whyUs.awardsTitle ||
    merged.whyUs.awardsTitle === "Recognized craftsmanship and service"
  ) {
    merged.whyUs.awardsTitle = defaultContent.whyUs.awardsTitle;
  }

  if (
    Array.isArray(merged.whyUs.awards) &&
    merged.whyUs.awards.length === 4 &&
    merged.whyUs.awards.every((item, index) =>
      [
        "Bridal Style Excellence",
        "Client Choice Studio",
        "Creative Wedding Couture",
        "Emerging Fashion House"
      ][index] === item.title
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
    Array.isArray(merged.contact.cards) &&
    merged.contact.cards[2] &&
    merged.contact.cards[2].text === "Dar es Salaam, Tanzania"
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

  if (!merged.contact.locationTitle || merged.contact.locationTitle === "Dar es Salaam, Tanzania") {
    merged.contact.locationTitle = defaultContent.contact.locationTitle;
  }

  if (
    !merged.contact.locationSummary ||
    merged.contact.locationSummary ===
      "Visit the Leah Fashion studio for fittings and custom consultations."
  ) {
    merged.contact.locationSummary = defaultContent.contact.locationSummary;
  }

  if (!merged.contact.mapEmbed) {
    merged.contact.mapEmbed = defaultContent.contact.mapEmbed;
  }

  if (
    !merged.footer.note ||
    merged.footer.note ===
      "Leah Fashion creates wedding looks with refined craft, joyful energy, and client-friendly presentation."
  ) {
    merged.footer.note = defaultContent.footer.note;
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

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

module.exports = {
  findAdminByUsername,
  getSiteContent,
  saveSiteContent
};
