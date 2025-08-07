
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const quizRouter = require('./routes/quiz');
const askRouter = require('./routes/ask');
const feedbackRouter = require('./routes/feedback');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/quiz", quizRouter);
app.use("/api/ask", askRouter);
app.use("/api/feedback", feedbackRouter);

app.get("/", (req, res) => res.send("AI Career Compass API"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Backend listening on", PORT));
