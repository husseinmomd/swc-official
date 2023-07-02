import { Button, Stack, Box } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Link } from "react-router-dom";
import { urlFor } from "../sanityConfig";
import { IJob } from "../types";

interface Props {
  job: IJob;
}
export const JobsCard: React.FC<Props> = ({ job }) => {
  return (
    <Stack
      pt={"48px"}
      pb={"48px"}
      borderBottom={"1px solid #2a2a2a"}
      display={"flex"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box className="content">
        {/* img */}
        <Box
          width={"100px"}
          height={"100px"}
          p={"5px"}
          overflow={"hidden"}
          bgcolor={"#fff"}
          borderRadius={"50%"}
        >
          <img
            width={"100%"}
            style={{ borderRadius: "50%" }}
            height={"100%"}
            src={urlFor(job.imgUrl).url()}
            alt="img"
          />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "20px",
          }}
          className="info"
        >
          <h1
            style={{
              fontSize: "28px",
              lineHeight: "48px",
              fontWeight: "700",
              marginBottom: "-2px",
            }}
          >
            {job.jobTitle}
          </h1>
          <span
            style={{
              fontSize: "18px",
              lineHeight: "28px",
              fontWeight: "400",
              opacity: "50%",
              marginBottom: "8px",
            }}
          >
            {job.companyName}
          </span>
          <Box display={"flex"} gap={"14px"}>
            <span
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: "400",
                opacity: "50%",
              }}
            >
              {job.jobType}
            </span>
            <span
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: "400",
                opacity: "50%",
              }}
            >
              {job.workType}
            </span>
            <span
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: "400",
                opacity: 0.9,
                marginRight: "12px",
              }}
            >
              {job.location}
            </span>
          </Box>
        </Box>
      </Box>
      <Link
        style={{
          textDecoration: "none",
        }}
        to={""}
      >
        <Button
          variant="contained"
          color="primary"
          endIcon={<CallMadeIcon />}
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "500",
            borderRadius: "8px",
            padding: "12px 16px",
            color: "#ffffff",
            backgroundColor: "#333",
          }}
        >
          Apply Now
        </Button>
      </Link>
    </Stack>
  );
};
