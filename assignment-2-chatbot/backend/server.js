const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const chatbotRoutes = require("./routes/chatbotRoutes");

dotenv.config();

const app = express();

// ✅ Fix CORS to allow frontend requests
app.use(cors());

app.use(express.json());

app.use("/api/chatbot", chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
