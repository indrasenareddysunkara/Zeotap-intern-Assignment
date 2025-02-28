import React from "react";

const Toolbar = ({ onFormat }) => {
  return (
    <div>
      <button onClick={() => onFormat("bold")}>Bold</button>
      <button onClick={() => onFormat("italic")}>Italic</button>
      <button onClick={() => onFormat("uppercase")}>UPPERCASE</button>
      <button onClick={() => onFormat("lowercase")}>lowercase</button>
    </div>
  );
};

export default Toolbar;
