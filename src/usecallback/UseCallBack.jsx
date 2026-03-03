import React, { useCallback, useState } from "react";
import Header from "./header";

const UseCallBack = () => {
  const [counter, setCounter] = useState(0);

  const newFn = useCallback(() => {}, []);

  return (
    <div className="container" style={{ flexDirection: "column" }}>
      <Header newFn={newFn} />
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Click Here</button>
    </div>
  );
};

export default UseCallBack;
