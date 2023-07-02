import { Skeleton } from "@mui/material";
import { IProfile } from "../types";
import { Card } from "./Card";
import { Button } from "./shared";

interface IFilteredListProps {
  profiles: IProfile[] | null;
  selectedSkill: string;
  isLoading: boolean;
}

export const FilteredList: React.FC<IFilteredListProps> = ({
  selectedSkill,
  profiles,
  isLoading,
}) => {
  const filteredProfiles = profiles?.filter((profile) =>
    profile.skills.includes(selectedSkill)
  );
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingBottom: "40px",
          justifyContent: "center",
          gap: "20px",
          position: "relative",
        }}
      >
        {isLoading ? (
          [1, 2, 3, 4].map(() => (
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
        ) : selectedSkill === "" ? (
          profiles
            ?.slice(0, 5)
            .map((profile) => <Card key={profile._id} profile={profile} />)
        ) : (
          <>
            {filteredProfiles?.slice(0, 5).map((profile) => (
              <Card key={profile._id} profile={profile} />
            ))}
          </>
        )}
      </div>

      {/* increase arr btn */}
      <div
        style={{
          marginTop: "10px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Button text={"Load More Developers"} />
      </div>
    </>
  );
};
