import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Layout: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const navigate = useNavigate();
  return (
    <>
      {isMobile ? (
        <>
          {" "}
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <>
          <div
            onClick={() => navigate("/jobs")}
            style={{
              cursor: "pointer",
              height: "50px",
              background: "#51b6bb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography fontSize={"14px"}>
              🎉 Introducing Job Board for helping people to get their next
              apportunity check it now! 🎉
            </Typography>
          </div>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
