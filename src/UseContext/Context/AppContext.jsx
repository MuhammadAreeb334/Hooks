import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "92 873892498";
  const name = "Ivar";
  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
