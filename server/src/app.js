"use strict";

require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");
const publicRoutes = require("./routes/public-routes");
const adminRoutes = require("./routes/admin-routes");

const app = express();
const rootDir = path.resolve(__dirname, "..", "..");
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.use("/assets", express.static(path.join(rootDir, "assets")));
app.use("/admin/assets", express.static(path.join(rootDir, "admin", "assets")));

app.use("/api/public", publicRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
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
