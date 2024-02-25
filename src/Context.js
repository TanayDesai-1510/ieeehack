import React, { createContext, useContext, useState } from "react";

// Step 1: Create a context
export const MyContext = createContext();

// Step 2: Create a custom hook to consume the context
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

// Step 3: Create a provider component
export const MyContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <MyContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </MyContext.Provider>
  );
};
