import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const UseRef = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0);
  const inputElem = useRef();

  useEffect(() => {
    count.current = count.current + 1;
  });

  const btnClicked = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = "blue";
  };

  return (
    <>
      <div className="container">
        <button onClick={() => setValue((prev) => prev - 1)}>-</button>
        <h1>{value}</h1>
        <button onClick={() => setValue((prev) => prev + 1)}>+</button>
        <h1>Render Count: {count.current}</h1>
      </div>
      <div>
        <input type="text" ref={inputElem} />
        <button onClick={btnClicked}>Click Here</button>
      </div>
    </>
  );
};

export default UseRef;
