import React from "react";
import UseLocalStorage from "./UseLocalStorage";

const Main = () => {
  const [name, setName] = UseLocalStorage("username", "");
  const [id, setId] = UseLocalStorage("userid", "");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello, {name}</h2>

      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <h2>Your ID is, {id}</h2>
    </>
  );
};

export default Main;
