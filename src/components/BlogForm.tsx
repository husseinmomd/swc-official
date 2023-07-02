import {
  TextField,
  FormControl,
  Button as ClickMUI,
  Box,
  LinearProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import client from "../sanityConfig";
import { IBlog } from "../types";
import Swal from "sweetalert2";

export const BlogForm: React.FC = () => {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IBlog>();

  function showToastMsg(
    msg: string,
    type: "warning" | "success" | "error" | "info" | "question"
  ) {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-right",
      showConfirmButton: false,
      timer: 3000,
      color: "#fff",
      background: "#383838",
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: type,
      title: msg,
    });
  }

  const onSubmit = handleSubmit(async (data) => {
    if (!file) return;
    setLoading(true);
    if (
      file?.type === "image/png" ||
      file?.type === "image/svg" ||
      file?.type === "image/jpeg" ||
      file?.type === "image/jpg" ||
      file?.type === "image/gif" ||
      file?.type === "image/tiff"
    ) {
      // submit data
      client.assets
        .upload("image", file, {
          contentType: file.type,
          filename: file.name,
        })
        .then(async (doc) => {
          const blog = await client.create<IBlog>({
            _type: "blogs",
            authorName: data.authorName,
            body: data.body,
            category: data.category,
            date: data.date,
            title: data.title,
            imgUrl: {
              _type: "image",
              asset: { _type: "reference", _ref: doc._id },
            },
          });
          if (blog) {
            setLoading(false);
            reset({
              authorName: "",
              body: "",
              category: "",
              date: "",
              title: "",
            });
            showToastMsg("Blog Posted successfully", "success");
          }
        })
        .catch((error) => {
          console.log(error);
          showToastMsg(error, "error");
        });
    } else {
      alert("Please use valid image, " + file.type + " is not supported");
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div
        style={{
          width: "100%",
          gap: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormControl fullWidth>
          <TextField
            error={errors.authorName as boolean | undefined}
            {...register("authorName", { required: true })}
            placeholder="Author Name 👮🏽‍♂️*"
            variant="standard"
          />
          {errors.authorName && (
            <span style={{ color: "#ff3131", marginTop: "6px" }}>
              This field coannot be blank
            </span>
          )}
        </FormControl>
        <FormControl fullWidth>
          <TextField
            error={errors.title as boolean | undefined}
            {...register("title", { required: true })}
            placeholder="Blog Title 📝*"
            variant="standard"
          />
          {errors.title && (
            <span style={{ color: "#ff3131", marginTop: "6px" }}>
              This field coannot be blank
            </span>
          )}
        </FormControl>
        <FormControl fullWidth>
          <TextField
            multiline
            minRows={5}
            error={errors.body as boolean | undefined}
            {...register("body", { required: true })}
            placeholder="Blog Body 💬*"
            variant="standard"
          />
          {errors.body && (
            <span style={{ color: "#ff3131", marginTop: "6px" }}>
              This field coannot be blank
            </span>
          )}
        </FormControl>
        <FormControl fullWidth>
          <TextField
            error={errors.category as boolean | undefined}
            {...register("category", { required: true })}
            placeholder="Category ⏹️*"
            variant="standard"
          />
          {errors.category && (
            <span style={{ color: "#ff3131", marginTop: "6px" }}>
              This field coannot be blank
            </span>
          )}
        </FormControl>
        <FormControl fullWidth>
          <TextField
            error={errors.date as boolean | undefined}
            {...register("date", { required: true })}
            placeholder="Date 📅*"
            variant="standard"
          />
          {errors.category && (
            <span style={{ color: "#ff3131", marginTop: "6px" }}>
              This field coannot be blank
            </span>
          )}
        </FormControl>
        <FormControl fullWidth>
          <div
            style={{
              border: "1px dotted #ccc",
              height: "80px",
              display: "flex",
              alignItems: "center",
            }}
            {...register("imgUrl", { required: true })}
          >
            <ClickMUI variant="text" component="label" className="mx-auto">
              Add Picture
              <input
                onChange={(e) => setFile(e.target.files![0])}
                type="file"
                hidden
              />
            </ClickMUI>
          </div>
          {errors.imgUrl && (
            <span
              style={{
                color: "#ff3131",
                marginTop: "6px",
                textAlign: "center",
              }}
            >
              A Pictrue is required
            </span>
          )}
        </FormControl>
        <Box width={"100%"} textAlign={"center"}>
          {!loading ? (
            <ClickMUI
              fullWidth
              color="inherit"
              variant="contained"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </ClickMUI>
          ) : (
            <LinearProgress color="inherit" />
          )}
        </Box>
      </div>
    </form>
  );
};
