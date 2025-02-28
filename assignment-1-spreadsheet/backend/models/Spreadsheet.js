import mongoose from "mongoose";

const SpreadsheetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    data: { type: Array, default: [] },
});

export const Spreadsheet = mongoose.model("Spreadsheet", SpreadsheetSchema);
