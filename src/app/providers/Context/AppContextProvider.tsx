import { createContext } from "react";
import { IContext } from "./types";

interface AppContextProviderProps {
    children: React.ReactNode;
    values: IContext;
}

export const AppContext = createContext<IContext | null>(null);

export const AppContextProvider = ({children, values}: AppContextProviderProps) => {
  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};