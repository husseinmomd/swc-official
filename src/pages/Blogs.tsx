import React, { useEffect } from "react";
import { useFetch } from "../hooks";
import client from "../sanityConfig";
import { IBlog } from "../types";
import { Skeleton, Button, useMediaQuery } from "@mui/material";
import { BlogSingle } from "../components";
import { useNavigate } from "react-router-dom";

const Blogs: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useFetch<IBlog[]>(client, '*[_type == "blogs"]');

  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={"blogImgWrapper"}>
        <div className="container">
          {/* top area */}
          <h1
            style={{
              fontWeight: "800",
              fontSize: !isMobile ? "52px" : "33px",
              textAlign: !isMobile ? "center" : "left",
            }}
            className={isMobile ? "" : "mt-5"}
          >
            Discover the Digital Frontier, Tech Blogs Unleashed
          </h1>
          <div className={isMobile ? "mt-3" : "text-center mt-5"}>
            <Button
              onClick={() => navigate("/blogs/create")}
              type="button"
              variant="contained"
              color="primary"
              style={{
                color: "#1b1b1b",
                backgroundColor: "#ffffff",
                padding: "12px 16px",
                borderRadius: "8px",
                fontWeight: "500",
                lineHeight: "24px",
                fontSize: "16px",
              }}
            >
              Create a Blog for Free
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#000",
          height: "100%",
          margin: "0",
          paddingTop: "100px",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: "35px",
            display: "flex",
            flexWrap: "wrap",
            height: "100%",
            flex: 1,
          }}
          className="container py-5"
        >
          {isLoading
            ? [1, 2, 3].map(() => (
                <Skeleton
                  animation={"wave"}
                  style={{
                    border: "none",
                    maxHeight: "500px",
                    width: "400px",
                    minHeight: "500px",
                    background: "#222",
                    position: "relative",
                    justifyContent: "center",
                    borderTopRightRadius: "16px",
                    borderTopLeftRadius: "16px",
                  }}
                />
              ))
            : data?.map((b) => <BlogSingle b={b} />)}
        </div>
      </div>
    </>
  );
};

export default Blogs;
