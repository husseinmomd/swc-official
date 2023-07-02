import { Theme, createTheme } from "@mui/material/styles";
import { FC, createContext, useContext, PropsWithChildren } from "react";
import { useColorTheme } from "../hooks";

type ThemeContextType = {
  mode: string;
  toggleColorMode: () => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "dark",
  toggleColorMode: () => {
    //
  },
  theme: createTheme(),
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
