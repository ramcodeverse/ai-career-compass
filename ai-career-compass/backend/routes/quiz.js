
const express = require('express');
const router = express.Router();
const openai = require('../openai');

router.post("/", async (req, res) => {
  const { answers } = req.body;
  const prompt = `A user answered: ${JSON.stringify(answers)}. 
Suggest 3 best-fit career paths with one-line explanations for each path.`;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: "You are a career counselor." },
                 { role: "user", content: prompt }]
    });
    const text = completion.data.choices[0].message.content;
    res.json({ recommendations: text });
  } catch (e) {
    res.status(500).json({ error: "AI error", detail: e.message });
  }
});

module.exports = router;
