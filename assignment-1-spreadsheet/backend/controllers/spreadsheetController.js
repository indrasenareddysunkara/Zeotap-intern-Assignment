import { Spreadsheet } from "../models/Spreadsheet.js";
import { applyFormula } from "../utils/formulas.js";

export const createSpreadsheet = async (req, res) => {
    const newSheet = new Spreadsheet({ name: req.body.name, data: [] });
    await newSheet.save();
    res.json(newSheet);
};

export const getSpreadsheet = async (req, res) => {
    const sheet = await Spreadsheet.findById(req.params.id);
    res.json(sheet);
};

export const updateCell = async (req, res) => {
    const { sheetId, row, col, value } = req.body;
    const sheet = await Spreadsheet.findById(sheetId);
    if (!sheet) return res.status(404).json({ message: "Sheet not found" });

    sheet.data[row][col] = value;
    await sheet.save();
    res.json({ success: true });
};

export const applyFormula = async (req, res) => {
    const { formula, range } = req.body;
    const result = applyFormula(formula, range);
    res.json({ result });
};
