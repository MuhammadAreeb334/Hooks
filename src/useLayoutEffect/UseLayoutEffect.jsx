import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
    
  useLayoutEffect(() => {
    console.log("this is UselayoutEffect");
  }, []);

  useEffect(() => {
    console.log("This is UseEffect");
  }, []);

  return (
    <div>
      <h2>Test</h2>
      {Array(40000)
        .fill("")
        .map((item, index) => (
          <li key={index}>{Math.pow(Math.random(), 10)}</li>
        ))}
    </div>
  );
};

export default UseLayoutEffect;
