import React from "react";
import { useNavigate } from "react-router-dom";
import { IBlog } from "../types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "../sanityConfig";

type Props = {
  b: IBlog;
};
export const BlogCard: React.FC<Props> = ({ b }) => {
  const navigate = useNavigate();
  return (
    <div key={b._id} className="col">
      <div
        onClick={() => navigate(`/blog/${b._id}`)}
        style={{
          border: "none",
          maxHeight: "650px",
          width: "400px",
          minHeight: "650px",
          background: "#222",
          // borderRadius: "20px",
          position: "relative",
          justifyContent: "center",
          borderTopRightRadius: "16px",
          borderTopLeftRadius: "16px",
        }}
        className="card"
      >
        <div className="blog-content">
          <div
            style={{
              margin: "14px auto",
              overflow: "hidden",
              width: "380px",
              height: "300px",
              borderTopRightRadius: "16px",
              borderTopLeftRadius: "16px",
            }}
            className="img-wrapper"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                transition: "all .5s ease-out",
                objectFit: "cover",
              }}
              src={urlFor(b.imgUrl.asset._ref as SanityImageSource).url()}
              alt="blog"
              className="blog-img"
            />
          </div>
          <div
            style={{
              width: "90%",
              paddingLeft: "14px",
              paddingRight: "14px",
              textAlign: "left",
            }}
            className="blog-detail"
          >
            <p style={{ fontSize: "10px", color: "#ccc" }}>{b.date}</p>
            <h3 style={{ fontWeight: "bold", height: "70px" }}>{b.title}</h3>
            <p style={{ lineHeight: "19px" }}>{b.body}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                paddingBottom: "20px",
              }}
            >
              <button
                style={{
                  border: "none",
                  background: "none",
                  padding: "0",
                  // paddingBottom: "10px",
                  fontSize: "12px",
                  color: "#ccc",
                  fontWeight: "200",
                }}
                className="btn read-more "
              >
                Read More
              </button>
              {/* <ReadMoreIcon fontSize="small" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
