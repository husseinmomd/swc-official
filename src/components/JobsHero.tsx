import { Button, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export const JobsHero: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="imgWrapperHero">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: !isMobile ? "center" : "start",
            alignItems: !isMobile ? "center" : "start",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: !isMobile ? "48px" : "40px",
              // lineHeight: "64px",
              marginBottom: "12px",
            }}
          >
            Curated Jobs for Developers
          </h1>
          <span
            style={{
              opacity: "60%",
              fontSize: !isMobile ? "20px" : "15px",
              marginBottom: !isMobile ? "32px" : "20px",
            }}
          >
            Somalis Who Code help you to get your next oppurtunity
          </span>
          {isMobile ? (
            <Link style={{ textDecoration: "none" }} to={"/jobs/create"}>
              <Button
                type="button"
                variant="contained"
                sx={{
                  color: "#333",
                  backgroundColor: "#fff",
                  padding: "10px 10px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Post a Job for FREE
              </Button>
            </Link>
          ) : (
            <Link style={{ textDecoration: "none" }} to={"/jobs/create"}>
              <Button
                type="button"
                variant="contained"
                sx={{
                  color: "#1b1b1b",
                  backgroundColor: "#ffffff",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Post a Job for FREE
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
