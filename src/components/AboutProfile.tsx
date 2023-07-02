import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import { IProfile } from "../types";
import VerifiedIcon from "@mui/icons-material/Verified";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "../sanityConfig";
import { Link } from "react-router-dom";

interface Prop {
  profile: IProfile;
}
export const AboutProfile: React.FC<Prop> = ({ profile }) => {
  return (
    <Card
      className="animate__animated animate__zoomIn"
      sx={{ maxWidth: 300, minHeight: 330, width: 240 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="260"
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
            {profile._id === "490b8110-10b7-457c-917e-316e9543cf90" && (
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
            )}

            {profile.name}
          </Typography>
          <CardActions sx={{ mt: 2, mx: 0, p: 0, mb: 1 }}>
            {profile.github && (
              <Link
                target="_blank"
                style={{ color: "#fff" }}
                to={profile.github}
              >
                <GitHubIcon fontSize="small" />
              </Link>
            )}
            {profile.linkedIn && (
              <Link
                target="_blank"
                style={{ color: "#fff" }}
                to={profile.linkedIn}
              >
                <LinkedInIcon fontSize="small" />
              </Link>
            )}
            {profile.twitter && (
              <Link
                target="_blank"
                style={{ color: "#fff" }}
                to={profile.twitter}
              >
                <TwitterIcon fontSize="small" />
              </Link>
            )}
            {profile.portfolio && (
              <Link
                target="_blank"
                style={{ color: "#fff" }}
                to={profile.portfolio}
              >
                <LinkIcon fontSize="small" />
              </Link>
            )}
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
