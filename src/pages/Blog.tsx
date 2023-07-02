import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogInfo, BlogSingle } from "../components";
import client, { urlFor } from "../sanityConfig";
import { IBlog } from "../types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useFetch } from "../hooks";
import { Skeleton, Stack } from "@mui/material";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<IBlog>();
  const [isFetching, setIsFetching] = useState(true);
  const { data, isLoading } = useFetch<IBlog[]>(client, '*[_type == "blogs"]');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    (async () => {
      await client
        .fetch<IBlog>(
          `*[_type == "blogs" && _id == $id][0]{
          _id,
          authorName,
          title,
          category,
          imgUrl,
          body,
          date
        }`,
          {
            id: id,
          }
        )
        .then((result) => {
          setBlog(result);
          setIsFetching(false);
        });
    })();
  }, [id, blog]);
  return (
    <>
      {isFetching ? (
        <div
          style={{
            border: "none",
            maxWidth: "1024px",
            height: "500px",
          }}
          className="container text-white"
        >
          <Skeleton
            animation={"wave"}
            style={{
              height: "inherit",
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
        </div>
      ) : (
        <div
          style={{ border: "none", marginTop: "50px", maxWidth: "1024px" }}
          className="container text-white"
        >
          <div className="img-container">
            <img
              style={{
                width: "100%",
              }}
              src={urlFor(blog?.imgUrl.asset._ref as SanityImageSource).url()}
              alt="blog"
            />
          </div>
          <div
            style={{
              marginTop: "10px",
              justifyContent: "center",
              fontSize: "15px",
              gap: "22px",
              display: "flex",
              color: "#ccc",
            }}
            className="top-content mt-3"
          >
            <span>Category: {blog?.category}</span>
            <span>By: {blog?.authorName}</span>
            <span>{blog?.date}</span>
          </div>
          <hr />
          <div className="middle-content mt-4 mb-5">
            <h2 style={{ fontWeight: "bold" }}>{blog?.title}</h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                marginTop: "30px",
              }}
            >
              {blog?.body}
            </p>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                marginTop: "30px",
              }}
            >
              {blog?.body}
            </p>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                marginTop: "30px",
              }}
            >
              {blog?.body}
            </p>
          </div>
          <hr />
          <BlogInfo blog={blog} />
        </div>
      )}
      <hr style={{ color: "white" }} />
      <div
        style={{ border: "none" }}
        className="related container text-white mb-5 mt-5"
      >
        <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
          Realted Posts
        </h2>
        <Stack
          direction={"row"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={"20px"}
          justifyContent={"center"}
          mt={5}
        >
          {isLoading ? (
            <>loading..</>
          ) : (
            data?.slice(0, 3).map((b) => (
              <>
                <BlogSingle b={b} />
              </>
            ))
          )}
        </Stack>
      </div>
    </>
  );
};

export default Blog;
