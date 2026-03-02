import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    // Clear on unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <p>Seconds: {count}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  );
};

export default Timer;