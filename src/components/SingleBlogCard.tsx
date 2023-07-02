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
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "../sanityConfig";
import { useNavigate } from "react-router-dom";

interface Prop {
  profile: IProfile;
}
export const SingleBlogCard: React.FC<Prop> = ({ profile }) => {
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
          height="330"
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
            {profile.name}
          </Typography>
          <Box pb={1} gap={0.8} display={"flex"} alignItems={"center"}>
            <PlaceOutlinedIcon fontSize="inherit" />
            <Typography variant="subtitle2" color="text.secondary">
              {profile.location}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            pt={"3px"}
            fontSize={"12px"}
            color="text.secondary"
          >
            {profile.bio}
          </Typography>
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
