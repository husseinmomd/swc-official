import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProfileCard, ProfileTop } from "../components";
import client from "../sanityConfig";
import { IProfile } from "../types";
import { useFetch } from "../hooks";
import { Box, Button, Skeleton, Stack, Divider } from "@mui/material";

const Profile: React.FC = () => {
  const { data } = useFetch<IProfile[]>(
    client,
    '*[_type == "profiles" && accepted == true]'
  );

  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<IProfile>();
  // const [skills, setSkills] = useState<string[]>();
  const [related, setRelated] = useState<IProfile[]>();
  const [loadingRelated, setLoadingRelated] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    (async () => {
      setLoading(true);

      await client
        .fetch<IProfile>(
          `*[_type == "profiles" && _id == $id][0]{
          _id,
          name,
          email,
          location,
          picture,
          bio,
          skills,
          github,
          linkedIn,
          twitter,
          portfolio
        }`,
          {
            id: id,
          }
        )
        .then((result) => {
          console.log("profile", result);
          setProfile(result);
          // setSkills(result.skills);
          setLoading(false);
        });
    })();
  }, [id]);

  // filter related useeffect
  useEffect(() => {
    // const filteredProfiles = data
    //   ?.filter((p) => p._id !== profile?._id)
    //   .filter(
    //     (p) =>
    //       p.skills &&
    //       Array.isArray(p.skills) &&
    //       p.skills.some((skill) => skills?.includes(skill.toLowerCase()))
    //   )
    //   .slice(0, 3);

    const shuffled = data
      ?.filter((p) => p._id !== profile?._id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    setRelated(shuffled);
    if (shuffled) {
      setLoadingRelated(false);
    }
  }, [data, profile?._id]);

  return (
    <>
      <Stack>
        <Box px={"3px"}>
          {loading ? (
            <Box display={"flex"} justifyContent={"center"}>
              <Skeleton
                animation={"wave"}
                style={{
                  background: "transparent",
                  height: "300px",
                  width: "300px",
                  paddingTop: "48px",
                }}
              />
            </Box>
          ) : (
            <ProfileTop profile={profile} />
          )}
        </Box>
      </Stack>

      <Divider
        style={{ marginTop: "10px", marginBottom: "20px" }}
        color="#222"
      />

      <Box mt={5}>
        <h2
          style={{
            fontWeight: "bold",
            color: "#FFF",
          }}
          className="text-center "
        >
          Related
        </h2>
        <Stack
          direction={"row"}
          gap={"30px"}
          mx={"auto"}
          py={"40px"}
          flexWrap={"wrap"}
          className="d-flex align-items-center justify-content-center"
        >
          {loadingRelated ? (
            [1, 2, 3].map(() => (
              <Skeleton
                animation={"wave"}
                style={{
                  overflow: "hidden",
                  display: "block",
                  width: "280px",
                  height: "510px",
                  maxHeight: "510px",
                  position: "relative",
                  borderRadius: "15px",
                }}
              />
            ))
          ) : related?.length === 0 ? (
            <div>No Related Found</div>
          ) : (
            related?.map((p) => <ProfileCard profile={p} key={p?._id} />)
          )}
        </Stack>
        <div className=" mb-5 text-center text-white">
          {/* <Button callback={() => navigate("/register")} text="Register Now!" /> */}
          <Button
            onClick={() => navigate("/register")}
            variant="contained"
            color="inherit"
            type="submit"
          >
            Register Now!
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Profile;
