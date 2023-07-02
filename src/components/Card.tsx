import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { urlFor } from "../sanityConfig";
import { Box, Card as MUCard } from "@mui/material";
import { IProfile } from "../types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type Props = {
  profile: IProfile;
};

export const Card: React.FC<Props> = ({ profile }) => {
  const navigate = useNavigate();
  return (
    <MUCard
      key={profile._id}
      onClick={() => navigate(`/profile/${profile?._id}`)}
      sx={{
        minHeight: "510px",
        marginTop: "20px",
        maxHeight: "510px",
        width: "310px",
        paddingTop: "15px",
        borderRadius: "20px",
        cursor: "pointer",
        position: "relative",
      }}
      className="card-animator animate__animated animate__zoomIn"
    >
      <Box
        overflow="hidden"
        display="block"
        width="282px"
        height="300px"
        position="relative"
        margin="5px auto"
        borderRadius="15px"
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "15px",
            transition: "all .5s ease-out",
            objectFit: "cover",
          }}
          className="round"
          src={urlFor(profile?.picture?.asset._ref as SanityImageSource).url()}
          alt="user"
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} className="content">
        <h3
          style={{
            textAlign: "left",
            padding: "0 1rem",
            marginTop: "14px",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          {profile.name}
        </h3>
        <Box
          maxHeight={"128px"}
          textAlign={"left"}
          overflow={"hidden"}
          p={"0 1rem"}
          color={"#ccc"}
        >
          <p>{profile.bio}</p>
        </Box>
      </Box>

      <Box
        position={"absolute"}
        className="skills d-flex justify-content-between"
      >
        <Box fontSize={"15px"}>
          <LocationOnIcon fontSize="small" />
          <span
            style={{
              marginLeft: "6px",
              color: "#ccc",
              fontSize: "12px",
            }}
          >
            {profile.location}
          </span>
        </Box>
        <Box display={"flex"} alignItems={"center"} fontSize={"15px"}>
          <span
            style={{
              marginRight: "9px",
              color: "#ccc",
              fontSize: "13px",
            }}
          >
            Visit Profile
          </span>
          <i className="fas fa-arrow-right"></i>
        </Box>
      </Box>
    </MUCard>
  );
};
