import React, { useEffect } from "react";
import { JobsCard, JobsHero, JobMobile } from "../components";
import { Button, Skeleton, useMediaQuery } from "@mui/material";
import { useFetch } from "../hooks";
import client from "../sanityConfig";
import { IJob } from "../types";

const Jobs: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data, isLoading } = useFetch<IJob[]>(client, '*[_type == "jobs"]');
  return (
    <div>
      <JobsHero />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "30px",
          paddingBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        {isLoading
          ? [1, 2].map(() => (
              <Skeleton
                animation={"wave"}
                style={{
                  background: "transparent",
                  borderBottom: "1px solid #2a2a2a",
                  paddingBottom: "48px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "48px",
                }}
              />
            ))
          : data?.map((job) =>
              isMobile ? (
                <JobMobile job={job} />
              ) : (
                <JobsCard key={job._id} job={job} />
              )
            )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
        className="container"
      >
        {isLoading ? (
          <></>
        ) : (
          <Button
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
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

export default Jobs;
