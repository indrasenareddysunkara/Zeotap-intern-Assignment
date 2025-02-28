import React, { useState } from "react";

const FormulaBar = ({ onApplyFormula }) => {
    const [formula, setFormula] = useState("");

    const handleApplyFormula = () => {
        onApplyFormula(formula);
        setFormula("");  // Clear after applying
    };

    return (
        <div className="formula-bar">
            <input
                type="text"
                placeholder="Enter formula (e.g., SUM(A1:A5))"
                value={formula}
                onChange={(e) => setFormula(e.target.value)}
            />
            <button onClick={handleApplyFormula}>Apply</button>
        </div>
    );
};

export default FormulaBar;
