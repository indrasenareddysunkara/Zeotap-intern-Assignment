export function applyFormula(formula, range) {
    switch (formula) {
        case "SUM":
            return range.reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
        case "AVERAGE":
            return range.length ? applyFormula("SUM", range) / range.length : 0;
        case "MAX":
            return Math.max(...range.map(val => parseFloat(val) || 0));
        case "MIN":
            return Math.min(...range.map(val => parseFloat(val) || 0));
        case "COUNT":
            return range.filter(val => !isNaN(val)).length;
        default:
            return "Invalid Formula";
    }
}
