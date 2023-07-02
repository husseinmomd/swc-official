import { Button, Stack, Box, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Hero: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const navigate = useNavigate();
  return (
    <Stack
      py={2}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontWeight: "800",
            fontSize: "52px",
          }}
        >
          Let's Make this Developers
          <h1
            style={{
              // fontWeight: "bold",
              fontSize: "52px",
              color: "#51b6bb",
            }}
          >
            Directory Better
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "55px",
              }}
            >
              Together
            </h1>
          </h1>
        </h1>
        {/* <Stack direction={"column"}>
          <Typography fontSize={"52px"} fontWeight={"800"}>
            Let's Make this Developers
          </Typography>
          <Typography fontSize={"30px"} fontWeight={"700"}>
            Directory Better Together
          </Typography>
        </Stack> */}
      </Box>
      <Box px={isMobile ? 4 : 0} py={1} className="text-center mt-3">
        <Typography>
          Build Your Own Professional Profile and explore more oppertunites
        </Typography>
        <div className="text-center mt-3 ">
          <Button
            fullWidth
            color="inherit"
            onClick={() => navigate("/register")}
            variant="contained"
          >
            Register Now!
          </Button>
        </div>
      </Box>
    </Stack>
  );
};
