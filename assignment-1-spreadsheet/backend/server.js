const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

const SpreadsheetSchema = new mongoose.Schema({ data: Array });
const Spreadsheet = mongoose.model("Spreadsheet", SpreadsheetSchema);

app.post("/api/spreadsheet/save", async (req, res) => {
    await Spreadsheet.deleteMany({});
    const newSheet = new Spreadsheet({ data: req.body });
    await newSheet.save();
    res.send("✅ Spreadsheet Saved!");
});

app.get("/api/spreadsheet/load", async (req, res) => {
    const sheet = await Spreadsheet.findOne();
    res.json(sheet ? sheet.data : []);
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
