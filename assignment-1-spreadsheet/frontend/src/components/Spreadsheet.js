import React, { useState, useEffect } from "react";
import { saveSpreadsheet, loadSpreadsheet } from "../api";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../styles.css";

const Spreadsheet = () => {
    const initialRows = 10;
    const initialCols = 10;
    const [data, setData] = useState(
        Array.from({ length: initialRows }, () => Array(initialCols).fill(""))
    );
    const [formula, setFormula] = useState("");
    const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });

    useEffect(() => {
        loadSpreadsheet().then((savedData) => {
            if (savedData && savedData.length > 0) {
                setData(savedData);
            }
        });
    }, []);

    const handleCellChange = (row, col, value) => {
        const newData = [...data];
        newData[row][col] = value;
        setData(newData);
    };

    const applyFormula = () => {
        if (!formula || !formula.includes("(") || !formula.includes(")")) {
            alert("Invalid formula format! Use SUM(A1:A5) or similar.");
            return;
        }

        const [func, range] = formula.replace(")", "").split("(");
        if (!func || !range) {
            alert("Invalid formula! Ensure it's formatted correctly.");
            return;
        }

        const cells = range.split(":");
        let values = [];

        if (cells.length === 2) {
            const [start, end] = cells.map(cell => {
                const col = cell.charCodeAt(0) - 65;
                const row = parseInt(cell.slice(1)) - 1;
                return { row, col };
            });

            for (let i = start.row; i <= end.row; i++) {
                for (let j = start.col; j <= end.col; j++) {
                    values.push(parseFloat(data[i]?.[j]) || 0);
                }
            }
        }

        let result = 0;
        if (func === "SUM") result = values.reduce((acc, val) => acc + val, 0);
        if (func === "AVERAGE") result = values.length > 0 ? values.reduce((acc, val) => acc + val, 0) / values.length : 0;
        if (func === "MAX") result = Math.max(...values);
        if (func === "MIN") result = Math.min(...values);
        if (func === "COUNT") result = values.length;

        const newData = [...data];
        newData[selectedCell.row][selectedCell.col] = result;
        setData(newData);
        setFormula("");
    };

    const addRow = () => {
        setData(prevData => [...prevData, Array(prevData[0]?.length || initialCols).fill("")]);
    };

    const addColumn = () => {
        setData(prevData => prevData.map(row => [...row, ""]));
    };

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const newData = [...data];
        const [movedRow] = newData.splice(result.source.index, 1);
        newData.splice(result.destination.index, 0, movedRow);
        setData(newData);
    };

    return (
        <div className="spreadsheet-container">
            <div className="toolbar">
                <input type="text" placeholder="Enter formula (e.g., SUM(A1:A5))" value={formula} onChange={(e) => setFormula(e.target.value)} />
                <button onClick={applyFormula}>Apply Formula</button>
                <button onClick={addRow}>➕ Add Row</button>
                <button onClick={addColumn}>➕ Add Column</button>
                <button onClick={() => saveSpreadsheet(data)}>💾 Save</button>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="spreadsheet">
                    {(provided) => (
                        <table ref={provided.innerRef} {...provided.droppableProps}>
                            <thead>
                                <tr>
                                    <th></th> {/* Empty corner */}
                                    {Array.from({ length: data[0]?.length || initialCols }, (_, index) => (
                                        <th key={index}>{String.fromCharCode(65 + index)}</th> // A, B, C, ...
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, rowIndex) => (
                                    <Draggable key={rowIndex} draggableId={rowIndex.toString()} index={rowIndex}>
                                        {(provided) => (
                                            <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <td className="row-label">{rowIndex + 1}</td> {/* Row number */}
                                                {row.map((cell, colIndex) => (
                                                    <td key={colIndex} contentEditable
                                                        onBlur={(e) => handleCellChange(rowIndex, colIndex, e.target.innerText)}
                                                        onClick={() => setSelectedCell({ row: rowIndex, col: colIndex })}>
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </tbody>
                        </table>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default Spreadsheet;
