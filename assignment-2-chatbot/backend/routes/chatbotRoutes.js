const express = require("express");
const { fetchAnswer } = require("../utils/queryProcessor");

const router = express.Router();

router.post("/ask", async (req, res) => {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: "No question provided" });

    const answer = await fetchAnswer(question);
    res.json({ answer });
});

module.exports = router;
