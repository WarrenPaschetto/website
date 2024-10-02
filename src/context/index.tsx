"use client"

import { createContext, ReactNode, useContext, useState } from "react";

// Define the shape of the context state
interface GlobalStateContextProps {
    role: "trainer" | "developer";
    toggleRole: (newRole: "trainer" | "developer") => void;
};

// Create the context with default values
const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

// Custom hook to use the GlobalStateContext
export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
      throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
  };

// Props for the provider, ensuring children are of type ReactNode
interface GlobalStateProviderProps {
    children: ReactNode;
}

// Create the provider component
export const GlobalStateProvider = ({children} : GlobalStateProviderProps) => {
  const [role, setRole] = useState<"trainer" | "developer">("trainer");

  const toggleRole = (newRole: "trainer" | "developer") => {
    setRole(newRole);
  };

  return (
    <GlobalStateContext.Provider value={{ role, toggleRole }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
