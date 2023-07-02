import { useNavigate } from "react-router-dom";
import { Skeleton, Button, Box, Stack } from "@mui/material";
import { useFetch } from "../hooks/useFetch";
import client from "../sanityConfig";
import { IBlog } from "../types";
import { BlogSingle } from ".";

export const Blog: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useFetch<IBlog[]>(client, '*[_type == "blogs"]');

  return (
    <div className="container mb-5 mt-5 text-white">
      <Stack
        direction={"row"}
        justifyContent={"center"}
        gap={4}
        flexWrap={"wrap"}
        alignItems={"center"}
      >
        {isLoading
          ? [1, 2, 3].map(() => (
              <Skeleton
                animation={"wave"}
                style={{
                  border: "none",
                  maxHeight: "500px",
                  width: "400px",
                  minHeight: "500px",
                  background: "#222",
                  position: "relative",
                  justifyContent: "center",
                  borderTopRightRadius: "16px",
                  borderTopLeftRadius: "16px",
                }}
              />
            ))
          : data?.map((b) => <BlogSingle b={b} />)}
      </Stack>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => () => navigate("/blogs")}
        >
          See More Blogs
        </Button>
      </Box>
    </div>
  );
};
