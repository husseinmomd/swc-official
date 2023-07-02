import { Tab, Tabs, Box } from "@mui/material";
import { useSkillStore } from "../store/skill.store";
import { skills } from "../data";

export const TabNav: React.FC = () => {
  const { addSkill, removeSkill, storeSkills, setSkill } = useSkillStore();

  console.log(storeSkills);

  console.log(storeSkills);
  return (
    <Box>
      <Tabs
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {skills.map((s, idx) => {
          return (
            <Tab
              focusRipple
              onClick={() => {
                if (storeSkills.includes(s)) {
                  removeSkill(s);
                  return;
                }
                addSkill(s);
                setSkill(s);
              }}
              // style={{
              //   // color: storeSkills.includes(s) ? "black" : "white",
              //   // background: storeSkills.includes(s) ? "#ccc" : "",
              //   marginRight: "17px",
              //   border: "1px solid #ccc",
              //   borderRadius: "8px",
              //   padding: "0px 20px",
              // }}
              sx={{
                // border: "1px solid #ccc",
                bgcolor: storeSkills.includes(s) ? "#ccc" : "#333",
                color: storeSkills.includes(s) ? "#000" : "#fff",
                mr: "14px",
              }}
              label={s}
              key={idx}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};
