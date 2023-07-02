import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button as ClickMUI,
  Box,
  LinearProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import client from "../sanityConfig";
import { IJob } from "../types";
import Swal from "sweetalert2";

export const JobForm: React.FC = () => {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IJob>();

  function showToastMsg(
    msg: string,
    type: "warning" | "success" | "error" | "info" | "question"
  ) {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
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
          const job = await client.create<IJob>({
            _type: "jobs",
            companyName: data.companyName,
            companyEmail: data.companyEmail,
            jobTitle: data.jobTitle,
            jobType: data.jobType,
            workType: data.workType,
            location: data.location,
            estimatedSalary: data.estimatedSalary,
            link: data.link,
            imgUrl: {
              _type: "image",
              asset: { _type: "reference", _ref: doc._id },
            },
          });
          if (job) {
            setLoading(false);
            reset({
              companyName: "",
              companyEmail: "",
              jobTitle: "",
              jobType: "",
              workType: "",
              location: "",
              estimatedSalary: 0,
              link: "",
            });
            showToastMsg("Job Posted successfully", "success");
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
            error={errors.jobTitle as boolean | undefined}
            {...register("jobTitle", { required: true })}
            placeholder="Job Title 👮🏽‍♂️*"
            variant="standard"
          />
          {errors.jobTitle && (
            <span style={{ color: "#ff3131", marginTop: "6px" }}>
              This field coannot be blank
            </span>
          )}
        </FormControl>
        <div className="row">
          <div className="col">
            <FormControl fullWidth>
              <TextField
                error={errors.companyName as boolean | undefined}
                {...register("companyName", { required: true })}
                placeholder="Company Name 🏛️*"
                variant="standard"
              />
              {errors.companyName && (
                <span style={{ color: "#ff3131", marginTop: "6px" }}>
                  This field coannot be blank
                </span>
              )}
            </FormControl>
          </div>
          <div className="col">
            <FormControl fullWidth>
              <TextField
                error={errors.location as boolean | undefined}
                {...register("location", { required: true })}
                placeholder="Location 🌍*"
                variant="standard"
              />
              {errors.location && (
                <span style={{ color: "#ff3131", marginTop: "6px" }}>
                  This field coannot be blank
                </span>
              )}
            </FormControl>
          </div>
        </div>
        {/* dropdown */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Select Work Type 🏫*
          </InputLabel>
          <Select
            error={errors.workType as boolean | undefined}
            {...register("workType", { required: true })}
            variant="standard"
            label="Age"
          >
            <MenuItem value={"Office"}>{"Office"}</MenuItem>
            <MenuItem value={"Remote"}>{"Remote"}</MenuItem>
            <MenuItem value={"Hybird"}>{"Hybird"}</MenuItem>
          </Select>
          {errors.workType && (
            <span style={{ color: "#ff3131", marginTop: "6px" }}>
              This field coannot be blank
            </span>
          )}
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Select Job Type 👷🏽*
          </InputLabel>
          <Select
            error={errors.jobTitle as boolean | undefined}
            {...register("jobType", { required: true })}
            variant="standard"
            label="Age"
          >
            <MenuItem value={"FullTime"}>{"FullTime"}</MenuItem>
            <MenuItem value={"PartTime"}>{"PartTime"}</MenuItem>
            <MenuItem value={"Contractor"}>{"Contractor"}</MenuItem>
            <MenuItem value={"Intern"}>{"Intern"}</MenuItem>
          </Select>
          {errors.jobType && (
            <span style={{ color: "#ff3131", marginTop: "6px" }}>
              This field coannot be blank
            </span>
          )}
        </FormControl>
        <FormControl fullWidth>
          <TextField
            error={errors.estimatedSalary as boolean | undefined}
            {...register("estimatedSalary", { required: false })}
            placeholder="Estimated Salary 💸*"
            variant="standard"
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            error={errors.link as boolean | undefined}
            {...register("link", { required: true })}
            placeholder="Link to apply 🔗*"
            variant="standard"
          />
          {errors.link && (
            <span style={{ color: "#ff3131", marginTop: "6px" }}>
              This field coannot be blank
            </span>
          )}
        </FormControl>
        <FormControl fullWidth>
          <TextField
            error={errors.companyEmail as boolean | undefined}
            {...register("companyEmail", { required: true })}
            placeholder="Contact Email 📧*"
            variant="standard"
          />
          {errors.companyEmail && (
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
              Photo or Icon is required
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
