import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";

const All = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // useMemo — Expensive computation only runs when `count` changes
  const doubleCount = useMemo(() => {
    console.log("Calculating doubleCount...");
    for (let i = 0; i < 1e7; i++) {} // simulate heavy work
    return count * 2;
  }, [count]);

  // useCallback — stable function reference, not recreated every render
  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  // useRef — keep track of render count (does not trigger re-render)
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });

  const themeStyles = useMemo(
    () => ({
      backgroundColor: dark ? "#333" : "#FFF",
      color: dark ? "#FFF" : "#333",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      transition: "all 0.3s",
    }),
    [dark]
  );

  return (
    <div style={themeStyles}>
      <h2>useMemo + useCallback + useRef Example</h2>
      <p>Count: {count}</p>
      <p>Double Count (computed): {doubleCount}</p>

      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>

      <p>Render Count: {renderCount.current}</p>
    </div>
  );
};

export default All;