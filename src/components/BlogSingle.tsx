import { IBlog } from "../types";
import { useNavigate } from "react-router-dom";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "../sanityConfig";
import {
  Button,
  Card,
  CardActions,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

interface Prop {
  b: IBlog;
}
export const BlogSingle: React.FC<Prop> = ({ b }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: 400,
        height: "100%",
        minHeight: 400,
      }}
      onClick={() => navigate(`/blog/${b._id}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          style={{ objectFit: "cover" }}
          image={urlFor(b?.imgUrl.asset._ref as SanityImageSource).url()}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            fontSize={"18px"}
            variant="h5"
            fontWeight={"800"}
            component="div"
          >
            {b.title}
          </Typography>
          <Typography
            gutterBottom
            fontSize={"12px"}
            variant="body1"
            fontWeight={"400"}
            component="p"
            color="text.secondary"
          >
            {b.body.substring(0, 120)}...
          </Typography>
          <CardActions sx={{ mt: 4, mx: 0, p: 0, mb: 1 }}>
            <Button
              sx={{ fontSize: "12px", px: 2, py: 0.6 }}
              variant="contained"
              color="inherit"
              onClick={() => navigate(`/blog/${b._id}`)}
            >
              Read More ...
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
