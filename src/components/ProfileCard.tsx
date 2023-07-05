import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Box } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import { IProfile } from "../types";
// import VerifiedIcon from "@mui/icons-material/Verified";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "../sanityConfig";
import { useNavigate } from "react-router-dom";

interface Prop {
  profile: IProfile;
}
export const ProfileCard: React.FC<Prop> = ({ profile }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="animate__animated animate__zoomIn"
      onClick={() => navigate(`/profile/${profile?._id}`)}
      sx={{ maxWidth: 330, minHeight: 330, width: 290 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          style={{ objectFit: "cover" }}
          image={urlFor(
            profile?.picture?.asset._ref as SanityImageSource
          ).url()}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            fontSize={"16px"}
            variant="h5"
            fontWeight={"800"}
            component="div"
          >
            {/* {profile._id === "490b8110-10b7-457c-917e-316e9543cf90" && (
              <VerifiedIcon
                color="inherit"
                fontSize="inherit"
                sx={{ mr: 0.7, opacity: 0.7 }}
              />
            )}
            {profile._id === "3a2eb4ae-9528-4346-bd89-ce76a28b0018" && (
              <VerifiedIcon
                color="inherit"
                fontSize="inherit"
                sx={{ mr: 0.7, opacity: 0.7 }}
              />
            )} */}

            {profile.name}
          </Typography>

          <Box pb={1} gap={0.8} display={"flex"} alignItems={"center"}>
            <PlaceOutlinedIcon fontSize="inherit" />
            <Typography variant="subtitle2" color="text.secondary">
              {profile.location}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            pt={"3px"}
            fontSize={"12px"}
            color="text.secondary"
          >
            {profile.bio && profile.bio.substring(0, 35)}...
          </Typography>
          {profile?.skills?.length === 1 ? (
            <Box pt={"10px"} display={"flex"} gap={1.4} alignItems={"center"}>
              {profile?.skills?.map((skill) => (
                <Typography
                  fontSize={"10px"}
                  sx={{
                    border: "1px solid #ddd",
                    px: 0.8,
                    py: 0.4,
                    borderRadius: 3,
                  }}
                >
                  {skill}
                </Typography>
              ))}
            </Box>
          ) : (
            <Box pt={"10px"} display={"flex"} gap={1.4} alignItems={"center"}>
              {profile?.skills?.slice(0, 2).map((skill) => (
                <Typography
                  fontSize={"10px"}
                  sx={{
                    border: "1px solid #ddd",
                    px: 0.8,
                    py: 0.4,
                    borderRadius: 3,
                  }}
                >
                  {skill}
                </Typography>
              ))}

              {profile?.skills?.length > 2 && (
                <Typography
                  sx={{
                    bgcolor: "#ccc",
                    fontWeight: "bold",
                    color: "#1b1b1b",
                    borderRadius: "50%",
                    px: 0.4,
                    py: 0.2,
                  }}
                  fontSize={"10px"}
                >
                  +{profile?.skills?.length - 2}
                </Typography>
              )}
            </Box>
          )}

          <CardActions sx={{ mt: 2, mx: 0, p: 0, mb: 1 }}>
            {profile.github && <GitHubIcon fontSize="small" />}
            {profile.linkedIn && <LinkedInIcon fontSize="small" />}
            {profile.twitter && <TwitterIcon fontSize="small" />}
            {profile.portfolio && <LinkIcon fontSize="small" />}
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
