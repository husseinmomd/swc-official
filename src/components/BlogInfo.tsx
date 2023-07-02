import React from "react";
import { IBlog } from "../types";

type Props = { blog: IBlog | undefined };
export const BlogInfo: React.FC<Props> = ({ blog }) => {
  return (
    <div className="writer mt-5 mb-5 ">
      <h2 style={{ fontWeight: "bold" }} className="mb-4">
        About Author
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <div>
          <div style={{ width: "200px" }}>
            <img
              src="/assets/img/2.jpg"
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "5px solid #133774",
              }}
              alt="blog"
            />
          </div>
        </div>
        <div>
          <div className="info-author">
            <h4 style={{ fontWeight: "bold", color: "#ccc" }}>
              Author:
              <span style={{ color: "#fff", marginLeft: "10px" }}>
                {blog?.authorName}
              </span>
            </h4>
            <div
              style={{
                display: "flex",
                gap: "14px",
                justifyContent: "flex-end",
                paddingRight: "22px",
              }}
              className="mb-2"
            >
              <a
                target="blank"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
                href="#"
              >
                <i className="fab fa-linkedin"> </i>
              </a>
              <a
                target="blank"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
                href="#"
              >
                <i className="fab fa-github"> </i>
              </a>
              <a
                target="blank"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
                href="#"
              >
                <i className="fab fa-twitter"> </i>
              </a>
            </div>
            <span style={{ fontSize: "19px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              impedit eveniet cumque aut saepe quisquam quasi recusandae ipsum
              repudiandae earum.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
