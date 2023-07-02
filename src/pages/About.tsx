import { Box, Typography, Stack, useMediaQuery } from "@mui/material";
import { useLayoutEffect, useState, useEffect } from "react";
import { useFetch } from "../hooks";
import { Link } from "react-router-dom";
import client from "../sanityConfig";
import { IProfile } from "../types";
import { AboutProfile } from "../components";

const About: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useMediaQuery("(max-width: 600px)");

  const { data } = useFetch<IProfile[]>(
    client,
    '*[_type == "profiles" && accepted == true]'
  );

  const [filteredProfiles, setFilteredProfiles] = useState<IProfile[]>([]);

  useEffect(() => {
    const filterObjects = (id1: string, id2: string) => {
      return data?.filter((obj) => obj._id === id1 || obj._id === id2);
    };
    setFilteredProfiles(
      filterObjects(
        "3a2eb4ae-9528-4346-bd89-ce76a28b0018",
        "490b8110-10b7-457c-917e-316e9543cf90"
      ) ?? []
    );
  }, [data]);
  return (
    <>
      {!isMobile ? (
        <Stack maxWidth={"900px"} mx={"auto"} px={10} py={5}>
          <Box py={3}>
            <Typography
              gutterBottom
              fontSize={"2.5rem"}
              variant="h1"
              fontWeight={"700"}
            >
              About This Project
            </Typography>
            <Typography
              gutterBottom
              fontSize={"15px"}
              variant="h4"
              lineHeight={1.4}
              fontWeight={"400"}
            >
              Our mission is to create a place to find outstanding people to
              follow, look for a mentor, or discover talented people.
            </Typography>
          </Box>
          <Box py={3}>
            <Typography
              gutterBottom
              fontSize={"1.5rem"}
              variant="h1"
              fontWeight={"700"}
            >
              Our Aim
            </Typography>
            <Typography
              gutterBottom
              fontSize={"15px"}
              lineHeight={1.4}
              variant="h4"
              fontWeight={"400"}
            >
              is to create a repository of the Somalis that are involved in the
              tech industry such as developers, engineers, entrepreneurs, CEOs,
              founders, etc.
            </Typography>
          </Box>
          <Box py={3}>
            <Typography
              gutterBottom
              fontSize={"1.5rem"}
              variant="h3"
              fontWeight={"700"}
            >
              Request an Edit or Opt-Out
            </Typography>
            <Typography
              gutterBottom
              fontSize={"15px"}
              lineHeight={1.4}
              variant="h4"
              fontWeight={"400"}
            >
              If you’ve been added to the directory and would like to opt-out or
              make an edit to your profile, please send us a message on Twitter
              to <Link to={""}>@somaliswhocode.</Link>
            </Typography>
          </Box>
          <Box pt={3}>
            <Typography
              gutterBottom
              fontSize={"1.5rem"}
              variant="h3"
              fontWeight={"700"}
            >
              Team behind this
            </Typography>

            <Box py={3} display={"flex"} gap={4}>
              {filteredProfiles.reverse().map((p) => {
                return <AboutProfile profile={p} key={p._id} />;
              })}
            </Box>
          </Box>
        </Stack>
      ) : (
        <Stack maxWidth={"800px"} mx={"auto"} px={4} py={5}>
          <Box py={3}>
            <Typography
              gutterBottom
              fontSize={"1.4rem"}
              variant="h1"
              fontWeight={"700"}
            >
              About This Project
            </Typography>
            <Typography
              gutterBottom
              fontSize={"12px"}
              lineHeight={1.4}
              variant="h4"
              fontWeight={"400"}
            >
              Our mission is to create a place to find outstanding people to
              follow, look for a mentor, or discover talented people.
            </Typography>
          </Box>
          <Box py={3}>
            <Typography
              gutterBottom
              fontSize={"1.2rem"}
              variant="h1"
              fontWeight={"700"}
            >
              Our Aim
            </Typography>
            <Typography
              gutterBottom
              fontSize={"12px"}
              variant="h4"
              lineHeight={1.4}
              fontWeight={"400"}
            >
              is to create a repository of the Somalis that are involved in the
              tech industry such as developers, engineers, entrepreneurs, CEOs,
              founders, etc.
            </Typography>
          </Box>
          <Box py={3}>
            <Typography
              gutterBottom
              fontSize={"1.2rem"}
              variant="h3"
              fontWeight={"700"}
            >
              Request an Edit or Opt-Out
            </Typography>
            <Typography
              gutterBottom
              fontSize={"12px"}
              variant="h4"
              lineHeight={1.4}
              fontWeight={"400"}
            >
              If you’ve been added to the directory and would like to opt-out or
              make an edit to your profile, please send us a message on Twitter
              to <Link to={""}>@somaliswhocode.</Link>.
            </Typography>
          </Box>
          <Box pt={3}>
            <Typography
              gutterBottom
              fontSize={"1.2rem"}
              variant="h3"
              fontWeight={"700"}
            >
              Team behind this
            </Typography>

            <Box
              py={3}
              px={0}
              display={"flex"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={4}
            >
              {filteredProfiles.reverse().map((p) => {
                return <AboutProfile profile={p} key={p._id} />;
              })}
            </Box>
          </Box>
        </Stack>
      )}
    </>
  );
};
export default About;
