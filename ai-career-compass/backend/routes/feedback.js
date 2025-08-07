
const express = require('express');
const router = express.Router();

let feedbackData = [];

router.post("/", (req, res) => {
  const { item, liked, comment } = req.body;
  feedbackData.push({ item, liked, comment, ts: Date.now() });
  res.json({ ok: true });
});

router.get("/", (req, res) => res.json(feedbackData));

module.exports = router;
