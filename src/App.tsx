import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./context";
import "animate.css";

const App: React.FC = () => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
