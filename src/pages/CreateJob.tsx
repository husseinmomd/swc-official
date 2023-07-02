import React from "react";
import { JobForm } from "../components";
import { Box, Container } from "@mui/material";

const CreateJob: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container sx={{ mx: "auto", width: "800px" }}>
      <Box p={"50px"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          py={2}
        >
          <h1
            style={{
              color: "#fffff",
              fontWeight: "600",
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Post Jobs for Free
          </h1>
          <span
            className="mb-5"
            style={{ textAlign: "center", color: "#d3d3d3" }}
          >
            Extent your reach in 60 sec 👇🏻
          </span>
        </Box>
        {/* form */}
        <JobForm />
      </Box>
    </Container>
  );
};

export default CreateJob;
