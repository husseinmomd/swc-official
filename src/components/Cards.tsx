import { Box, Button, Skeleton, Stack } from "@mui/material";
import { ProfileCard } from "../components";

import { useEffect, useState } from "react";
import { useSkillStore } from "../store/skill.store";
import { useShuffledArr } from "../store";

export const Cards: React.FC = () => {
  // setps

  // const { data, isLoading } = useFetch<IProfile[]>(
  //   client,
  //   `*[_type == "profiles" && accepted == true]{
  //     _id,
  //     name,
  //     email,
  //     location,
  //     picture,
  //     bio,
  //     skills,
  //     github,
  //     linkedIn,
  //     twitter,
  //     portfolio
  //   }`
  // );

  const { shuffledArr, getShuffuled, loading } = useShuffledArr();
  useEffect(() => {
    getShuffuled();
  }, [getShuffuled]);

  const [visible, setVisible] = useState(10);
  const { storeSkills } = useSkillStore();

  return (
    <>
      <Stack
        direction={"row"}
        gap={"40px"}
        justifyContent={"center"}
        pb={"40px"}
        position={"relative"}
        flexWrap={"wrap"}
      >
        {loading
          ? [1, 2, 3, 4].map(() => (
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
          : storeSkills.length
          ? shuffledArr
              ?.filter(
                (p) =>
                  p.skills &&
                  Array.isArray(p.skills) &&
                  p.skills.some((skill) =>
                    storeSkills.includes(skill.toLocaleLowerCase())
                  )
              )

              .map((p) => <ProfileCard key={p._id} profile={p} />)
          : shuffledArr
              .slice(0, visible)
              .map((profile) => (
                <ProfileCard key={profile._id} profile={profile} />
              ))}
        {/* <ProfileCard key={profile._id} profile={profile} /> */}
      </Stack>

      {/* increase arr btn */}
      {visible !== shuffledArr.length && (
        <Box mt={"10px"} justifyContent={"center"} display={"flex"}>
          <Button
            onClick={() =>
              setVisible((prev) => prev + shuffledArr.length - visible)
            }
            variant="contained"
            color="inherit"
            type="submit"
          >
            Load More Developers
          </Button>
        </Box>
      )}
    </>
  );
};
