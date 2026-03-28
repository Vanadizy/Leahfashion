"use strict";

const express = require("express");
const { getSiteContent } = require("../repository/site-repository");

const router = express.Router();

router.get("/site", async (req, res, next) => {
  try {
    const content = await getSiteContent();
    res.json({ content });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
