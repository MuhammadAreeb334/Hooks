import React, { useState, useMemo } from "react";

const Memo = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");

  // Expensive computation
  const slowFunction = (num) => {
    console.log("Running slow function...");
    for (let i = 0; i < 1e8; i++) {} // simulate heavy work
    return num * 2;
  };

  // useMemo will only recompute if `number` changes
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = useMemo(
    () => ({
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
    }),
    [theme]
  );

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
      <p>Double: {doubleNumber}</p>
    </div>
  );
};

export default Memo;