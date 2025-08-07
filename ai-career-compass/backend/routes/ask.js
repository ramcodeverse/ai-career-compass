
const express = require('express');
const router = express.Router();
const openai = require('../openai');

router.post("/", async (req, res) => {
  const { question } = req.body;
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: "You are a career guidance expert." },
                { role: "user", content: question }]
    });
    const reply = completion.data.choices[0].message.content;
    res.json({ answer: reply });
  } catch (e) {
    res.status(500).json({ error: "AI error", detail: e.message });
  }
});

module.exports = router;
