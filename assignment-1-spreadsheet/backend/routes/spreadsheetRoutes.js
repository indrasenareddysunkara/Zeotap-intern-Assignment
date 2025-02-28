import express from "express";
import {
    createSpreadsheet,
    getSpreadsheet,
    updateCell,
    applyFormula
} from "../controllers/spreadsheetController.js";

const router = express.Router();

router.post("/", createSpreadsheet);
router.get("/:id", getSpreadsheet);
router.post("/cell/update", updateCell);
router.post("/formula/apply", applyFormula);

export default router;
