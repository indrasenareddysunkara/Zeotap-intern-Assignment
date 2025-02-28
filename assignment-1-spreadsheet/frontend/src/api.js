import axios from "axios";

const API_URL = "http://localhost:5000";  // Backend URL

export const saveSpreadsheet = async (data) => {
    try {
        const res = await axios.post(`${API_URL}/api/spreadsheet/save`, data);
        return res.data;
    } catch (error) {
        console.error("Error saving spreadsheet:", error);
    }
};

export const loadSpreadsheet = async () => {
    try {
        const res = await axios.get(`${API_URL}/api/spreadsheet/load`);
        return res.data;
    } catch (error) {
        console.error("Error loading spreadsheet:", error);
    }
};
