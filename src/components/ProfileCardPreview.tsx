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

interface Prop {
  previewSource: string;
  inputValues: IProfile;
}
export const ProfileCardPreview: React.FC<Prop> = ({
  previewSource,
  inputValues,
}) => {
  return (
    <Card
      className="animate__animated animate__zoomIn"
      sx={{ maxWidth: 330, minHeight: 330, width: 290 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="330"
          style={{ objectFit: "cover" }}
          image={previewSource || "/assets/img/demo.jpg"}
          alt="green iguana"
        />
        <CardContent sx={{ px: 2 }}>
          <Typography
            gutterBottom
            fontSize={"16px"}
            variant="h5"
            fontWeight={"800"}
            component="div"
          >
            {!inputValues.name && "Full Name"}
            {inputValues.name.length <= 19
              ? inputValues.name
              : `${inputValues.name.substring(0, 19)}...`}
          </Typography>
          <Box pb={1} gap={0.8} display={"flex"} alignItems={"center"}>
            <PlaceOutlinedIcon fontSize="inherit" />
            <Typography variant="subtitle2" color="text.secondary">
              {!inputValues.location && "Location"}
              {inputValues.location.length <= 15
                ? inputValues.location
                : `${inputValues.location.substring(0, 15)}...`}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            pt={"3px"}
            fontSize={"12px"}
            color="text.secondary"
          >
            {!inputValues.bio && "short Bio"}
            {inputValues.bio.length <= 150
              ? inputValues.bio
              : `${inputValues.bio.substring(0, 150)}...`}
          </Typography>
          <CardActions sx={{ mt: 2, mx: 0, p: 0, mb: 1 }}>
            {inputValues.github && <GitHubIcon fontSize="small" />}
            {inputValues.linkedIn && <LinkedInIcon fontSize="small" />}
            {inputValues.twitter && <TwitterIcon fontSize="small" />}
            {inputValues.portfolio && <LinkIcon fontSize="small" />}
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
