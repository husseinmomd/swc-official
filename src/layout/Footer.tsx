import { Box, Typography } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <footer>
      <Box textAlign={"center"} p={0.5}>
        <Typography color={"#ccc"}>© 2023 SomalisWhoCode</Typography>
      </Box>
    </footer>
  );
};
