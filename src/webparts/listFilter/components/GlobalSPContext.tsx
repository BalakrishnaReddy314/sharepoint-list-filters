import { WebPartContext } from "@microsoft/sp-webpart-base";
import { createContext, useContext } from "react";


export const SPContext = createContext<WebPartContext | undefined>(null);

// Create a custom hook to access the context
export function useSPContext(): WebPartContext {
  const context: WebPartContext = useContext(SPContext);
  if (!context) {
    throw new Error("useSPContext must be used within a SPContextProvider");
  }
  return context;
}