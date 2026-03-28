"use strict";

require("dotenv").config();

const fs = require("fs/promises");
const path = require("path");
const express = require("express");
const cors = require("cors");
const publicRoutes = require("./routes/public-routes");
const adminRoutes = require("./routes/admin-routes");

const app = express();
const rootDir = path.resolve(__dirname, "..", "..");
const port = Number(process.env.PORT || 4000);
const configuredSiteUrl = String(process.env.SITE_URL || "").trim().replace(/\/+$/, "");

app.set("trust proxy", true);
app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.use("/assets", express.static(path.join(rootDir, "assets")));
app.use("/admin/assets", express.static(path.join(rootDir, "admin", "assets")));

app.use("/api/public", publicRoutes);
app.use("/api/admin", adminRoutes);

app.get(["/", "/index.html"], async (req, res, next) => {
  try {
    await sendPublicPage(req, res, "index.html");
  } catch (error) {
    next(error);
  }
});

app.get(["/catalog", "/catalog.html"], async (req, res, next) => {
  try {
    await sendPublicPage(req, res, "catalog.html");
  } catch (error) {
    next(error);
  }
});

app.get(["/gallery", "/gallery.html"], async (req, res, next) => {
  try {
    await sendPublicPage(req, res, "gallery.html");
  } catch (error) {
    next(error);
  }
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(rootDir, "admin", "index.html"));
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found." });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: "Server error." });
});

app.listen(port, () => {
  console.log(`Leah Fashion server running at http://localhost:${port}`);
});

async function sendPublicPage(req, res, fileName) {
  const absolutePath = path.join(rootDir, fileName);
  const template = await fs.readFile(absolutePath, "utf8");
  const siteOrigin = getSiteOrigin(req);
  const pageUrl = `${siteOrigin}${req.originalUrl === "/" ? "/" : req.originalUrl}`;

  const html = template
    .replace(/__SITE_ORIGIN__/g, siteOrigin)
    .replace(/__PAGE_URL__/g, pageUrl);

  res.type("html").send(html);
}

function getSiteOrigin(req) {
  if (configuredSiteUrl) {
    return configuredSiteUrl;
  }

  return `${req.protocol}://${req.get("host")}`;
}
