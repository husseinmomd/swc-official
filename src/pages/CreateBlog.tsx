import { Container, Box } from "@mui/material";
import { BlogForm } from "../components";

const CreateBlog: React.FC = () => {
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
            Post Blogs for Free
          </h1>
          <span
            className="mb-5"
            style={{ textAlign: "center", color: "#d3d3d3" }}
          >
            Extent your reach in 60 sec 👇🏻
          </span>
        </Box>
        {/* form */}
        <BlogForm />
      </Box>
    </Container>
  );
};

export default CreateBlog;
