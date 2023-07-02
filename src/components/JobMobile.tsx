import { Box, Button, CardMedia, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { urlFor } from "../sanityConfig";
import { IJob } from "../types";
import CallMadeIcon from "@mui/icons-material/CallMade";

interface Prop {
  job: IJob;
}
export const JobMobile: React.FC<Prop> = ({ job }) => {
  return (
    <Card sx={{ px: 2, py: 2, background: "none" }}>
      <Box display={"flex"} alignItems={"start"}>
        <Box
          sx={{
            overflow: "hidden",
          }}
        >
          <CardMedia
            sx={{
              objectFit: "cover",
              borderRadius: "50%",
              border: "3px solid #fff",
            }}
            component="img"
            image={urlFor(job.imgUrl).width(90).height(90).url()}
            alt="job"
          />
        </Box>
        <Box pl={2} gap={0.8} display={"flex"} flexDirection={"column"}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "20px",
              textTransform: "uppercase",
            }}
            component={"h1"}
          >
            {job?.jobTitle}
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "15px", color: "#999" }}
            component={"span"}
          >
            {job?.companyName}
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "15px", color: "#999" }}
            component={"span"}
          >
            {job?.jobType}
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "15px", color: "#999" }}
            component={"span"}
          >
            {job?.workType}
          </Typography>
          <Typography
            sx={{ fontWeight: "600", fontSize: "13px", color: "#ccc" }}
            component={"span"}
          >
            {job?.location}
          </Typography>
        </Box>
      </Box>

      <Link to={job.link}>
        <Button
          endIcon={<CallMadeIcon />}
          sx={{
            py: 1.8,
            my: 3,
            bgcolor: "#222222",
            color: "#ffff",
            fontWeight: "700",
            fontSize: "15px",
          }}
          fullWidth
          variant="contained"
        >
          Apply Now
        </Button>
      </Link>
    </Card>
  );
};
