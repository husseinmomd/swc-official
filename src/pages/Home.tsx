import { TabNav, Hero, Cards } from "../components";
import { Box, Stack } from "@mui/material";
import { Blog } from "../components";

const Home: React.FC = () => {
  return (
    <Stack bgcolor={"#1b1b1b"}>
      <Stack mt={"20px"}>
        <Hero />
      </Stack>
      <Box
        maxWidth={"100%"}
        width={"100%"}
        flexWrap={"wrap"}
        mt={"60px"}
        mx={"0 auto"}
      >
        <TabNav />
      </Box>
      <Stack maxWidth={"1800px"} mt={4} mx={"auto"}>
        <Cards />
      </Stack>
      <Blog />
    </Stack>
  );
};

export default Home;
