"use strict";

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { requireAuth } = require("../middleware/auth");
const {
  findAdminByUsername,
  getSiteContent,
  saveSiteContent
} = require("../repository/site-repository");

const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body || {};

    if (!username || !password) {
      res.status(400).json({ error: "Username and password are required." });
      return;
    }

    const admin = await findAdminByUsername(username);
    if (!admin) {
      res.status(401).json({ error: "Invalid credentials." });
      return;
    }

    const isMatch = await bcrypt.compare(password, admin.password_hash);
    if (!isMatch) {
      res.status(401).json({ error: "Invalid credentials." });
      return;
    }

    const token = jwt.sign(
      {
        sub: admin.id,
        username: admin.username,
        fullName: admin.full_name
      },
      process.env.JWT_SECRET || "change_this_secret",
      { expiresIn: "12h" }
    );

    res.json({
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        fullName: admin.full_name
      }
    });
  } catch (error) {
    next(error);
  }
});

router.get("/content", requireAuth, async (req, res, next) => {
  try {
    const content = await getSiteContent();
    res.json({ content });
  } catch (error) {
    next(error);
  }
});

router.put("/content", requireAuth, async (req, res, next) => {
  try {
    const { content } = req.body || {};

    if (!content || typeof content !== "object" || Array.isArray(content)) {
      res.status(400).json({ error: "A valid content object is required." });
      return;
    }

    const savedContent = await saveSiteContent(content);
    res.json({ content: savedContent, message: "Content updated successfully." });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
