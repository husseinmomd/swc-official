import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "../sanityConfig";
import { IProfile } from "../types";
import { Box, Badge, Stack, useMediaQuery, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  profile: IProfile | undefined;
};
export const ProfileTop: React.FC<Props> = ({ profile }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={5}
      mx={"auto"}
    >
      {profile?.picture && (
        <img
          style={{
            width: "100%",
            maxWidth: isMobile ? "140px" : "180px",
            maxHeight: isMobile ? "140px" : "180px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "7px solid #fff",
          }}
          src={urlFor(profile?.picture.asset._ref as SanityImageSource).url()}
          alt="img"
        />
      )}
      <h3
        style={{ fontWeight: "600", fontSize: isMobile ? "20px" : '"29px"' }}
        className="text-white mt-3"
      >
        {/* {profile?._id === "490b8110-10b7-457c-917e-316e9543cf90" && (
          <VerifiedIcon
            color="inherit"
            fontSize="small"
            sx={{ mr: 0.7, opacity: 0.7 }}
          />
        )}
        {profile?._id === "3a2eb4ae-9528-4346-bd89-ce76a28b0018" && (
          <VerifiedIcon
            color="inherit"
            fontSize="small"
            sx={{ mr: 0.7, opacity: 0.7 }}
          />
        )} */}
        {profile?.name}
      </h3>
      {profile?.location && (
        <span
          style={{
            color: "#ccc",
          }}
        >
          {profile?.location}
        </span>
      )}
      <Box width={"500px"} px={isMobile ? 10 : 0} py={1}>
        <Typography
          sx={{
            fontSize: "13px",
            textAlign: "center",
          }}
        >
          {profile?.bio}
        </Typography>
      </Box>
      <Box
        px={isMobile ? 0.3 : 0}
        display={"flex"}
        justifyContent={"center"}
        gap={"15px"}
        flexWrap={"wrap"}
        mx={"auto"}
        maxWidth={"600px"}
        mt={"10px"}
      >
        {profile &&
          profile?.skills &&
          profile?.skills.map((e: string) => (
            <Badge
              style={{
                border: "none",
                background: "#333",
                color: "#fff",
                padding: "6px 15px",
                borderRadius: "35px",
                fontSize: "12px",
              }}
            >
              {e}
            </Badge>
          ))}
      </Box>
      <Stack display={"flex"} direction={"row"} gap={"20px"} mt={5} mb={4}>
        {profile?.linkedIn && (
          <Link
            target="blank"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "22px",
            }}
            to={profile?.linkedIn ?? ""}
          >
            <i className="fab fa-linkedin"> </i>
          </Link>
        )}

        {profile?.github && (
          <Link
            target="blank"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "22px",
            }}
            to={profile?.github ?? ""}
          >
            <i className="fab fa-github"> </i>
          </Link>
        )}

        {profile?.twitter && (
          <Link
            target="blank"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "22px",
            }}
            to={profile?.twitter ?? ""}
          >
            <i className="fab fa-twitter"> </i>
          </Link>
        )}
        {profile?.portfolio && (
          <Link
            target="blank"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "22px",
            }}
            to={profile?.portfolio ?? ""}
          >
            <i className="fa fa-globe"></i>
          </Link>
        )}
      </Stack>
    </Box>
  );
};
