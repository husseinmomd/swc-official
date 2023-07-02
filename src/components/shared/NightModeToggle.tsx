import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../../context";

const NightModeToggle = () => {
  const { mode } = useThemeContext();

  return (
    <IconButton
      sx={{ ml: 1, color: "#ccc" }}
      onClick={() => {
        // TODO: toggle dark theme
      }}
      color="inherit"
    >
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default NightModeToggle;
