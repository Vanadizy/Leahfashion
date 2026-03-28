"use strict";

const jwt = require("jsonwebtoken");

function requireAuth(req, res, next) {
  const authorization = req.headers.authorization || "";

  if (!authorization.startsWith("Bearer ")) {
    res.status(401).json({ error: "Authentication required." });
    return;
  }

  const token = authorization.slice("Bearer ".length).trim();

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || "change_this_secret");
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token." });
  }
}

module.exports = { requireAuth };
