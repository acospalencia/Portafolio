import { createContext, useState } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [selected, setSelected] = useState("proyectos"); // valor por defecto

  return (
    <NavContext.Provider value={{ selected, setSelected }}>
      {children}
    </NavContext.Provider>
  );
};
