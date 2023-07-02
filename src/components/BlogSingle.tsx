import { IBlog } from "../types";
import { useNavigate } from "react-router-dom";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "../sanityConfig";
import { Box, Stack, Button } from "@mui/material";

interface Prop {
  b: IBlog;
}
export const BlogSingle: React.FC<Prop> = ({ b }) => {
  const navigate = useNavigate();
  return (
    <Box key={b._id} className="">
      <Stack
        width={"400px"}
        bgcolor={"#222"}
        position={"relative"}
        minHeight={"600px"}
        overflow={"hidden"}
        onClick={() => navigate(`/blog/${b._id}`)}
        style={{
          borderTopRightRadius: "16px",
          borderTopLeftRadius: "16px",
        }}
      >
        <Stack>
          <Box
            m={"14px auto"}
            width={"380px"}
            height={"280px"}
            overflow={"hidden"}
            borderRadius={"6px"}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                transition: "all .5s ease-out",
                objectFit: "cover",
              }}
              src={urlFor(b?.imgUrl.asset._ref as SanityImageSource).url()}
              alt="blog"
              className="blog-img"
            />
          </Box>
          <Box width={"90%"} px={"14px"} textAlign={"left"}>
            <p style={{ fontSize: "10px", color: "#ccc" }}>{b.date}</p>
            <h3 style={{ fontWeight: "800", fontSize: "23px", height: "60px" }}>
              {b.title}
            </h3>
            <p style={{ lineHeight: "19px" }}>{b.body.substring(0, 200)}...</p>

            <Box p={0} position={"absolute"} bottom={40} fontWeight={"200"}>
              <Button
                size={"small"}
                color="inherit"
                variant="contained"
                onClick={() => navigate(`/blog/${b._id}`)}
              >
                Read More
              </Button>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
