import { Box, AppBar, Toolbar, useMediaQuery, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import NightModeToggle from "../components/shared/NightModeToggle";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";

export const Header: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const navigate = useNavigate();

  return (
    <AppBar elevation={0.9} position="sticky">
      <Toolbar
        sx={{
          bgcolor: "#222",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isMobile ? (
          <>
            <Box>
              <Button
                onClick={() => {
                  navigate("/");
                }}
                size={"large"}
                variant="text"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Somalis Who Code
              </Button>
            </Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={isDrawerOpen}
              onClose={handleDrawerToggle}
            >
              {/* Place your mobile navigation links here */}
              <Box p={2}>
                <Button
                  onClick={() => {
                    navigate("/register");
                  }}
                  variant="text"
                  sx={{ color: "#fff" }}
                >
                  Nominate
                </Button>
                <Button
                  onClick={() => {
                    navigate("/about");
                  }}
                  variant="text"
                  sx={{ color: "#fff" }}
                >
                  About
                </Button>
                <Button
                  onClick={() => {
                    navigate("/jobs");
                  }}
                  variant="text"
                  sx={{ color: "#fff" }}
                >
                  Jobs
                </Button>
                <Button
                  onClick={() => {
                    navigate("/blogs");
                  }}
                  variant="text"
                  sx={{ color: "#fff" }}
                >
                  Blogs
                </Button>
                <Link to={""}>
                  <TwitterIcon sx={{ color: "#fff", ml: 1 }} fontSize="small" />
                </Link>
                {/* Add more mobile navigation links here */}
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Box display={"flex"} alignItems={"center"} gap={"8px"}>
              <Button
                onClick={() => {
                  navigate("/register");
                }}
                variant="text"
                sx={{ color: "#fff" }}
              >
                Nominate
              </Button>

              <Button
                onClick={() => {
                  navigate("/about");
                }}
                variant="text"
                sx={{ color: "#fff" }}
              >
                About
              </Button>
              <Link to={""}>
                <TwitterIcon sx={{ color: "#fff" }} fontSize="small" />
              </Link>
            </Box>
            <Box>
              <Button
                onClick={() => {
                  navigate("/");
                }}
                size={"large"}
                variant="text"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Somalis Who Code
              </Button>
            </Box>

            <Box display={"flex"}>
              <Button
                onClick={() => {
                  navigate("/jobs");
                }}
                variant="text"
                sx={{ color: "#fff" }}
              >
                Jobs
              </Button>
              <Button
                onClick={() => {
                  navigate("/blogs");
                }}
                variant="text"
                sx={{ color: "#fff" }}
              >
                Blogs
              </Button>
              <NightModeToggle />
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
    // <AppBar elevation={0.9} position="sticky">
    //   <Toolbar
    //     sx={{
    //       bgcolor: "#222",
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Box display={"flex"} alignItems={"center"} gap={"8px"}>
    //       <Button
    //         onClick={() => {
    //           navigate("/register");
    //         }}
    //         variant="text"
    //         sx={{ color: "#fff" }}
    //       >
    //         Nominate
    //       </Button>

    //       <Button
    //         onClick={() => {
    //           navigate("/about");
    //         }}
    //         variant="text"
    //         sx={{ color: "#fff" }}
    //       >
    //         About
    //       </Button>
    //       <Link to={""}>
    //         <TwitterIcon sx={{ color: "#fff" }} fontSize="small" />
    //       </Link>
    //     </Box>

    //     <Box>
    //       <Button
    //         onClick={() => {
    //           navigate("/");
    //         }}
    //         size={"large"}
    //         variant="text"
    //         sx={{ color: "#fff", fontWeight: "bold" }}
    //       >
    //         Somalis Who Code
    //       </Button>
    //     </Box>

    //     <Box display={"flex"}>
    //       <Button
    //         onClick={() => {
    //           navigate("/jobs");
    //         }}
    //         variant="text"
    //         sx={{ color: "#fff" }}
    //       >
    //         Jobs
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           navigate("/blogs");
    //         }}
    //         variant="text"
    //         sx={{ color: "#fff" }}
    //       >
    //         Blogs
    //       </Button>
    //       <NightModeToggle />
    //     </Box>
    //   </Toolbar>
    // </AppBar>
  );
};
