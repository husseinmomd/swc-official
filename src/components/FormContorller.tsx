import {
  TextField,
  Button,
  LinearProgress,
  Box,
  FormControl as FC,
} from "@mui/material";
import React, { useRef, useState } from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AddButton } from "./shared";
import { useForm } from "react-hook-form";
import { SelectedSkills } from "./SelectedSkills";
import { IProfile } from "../types";
import client from "../sanityConfig";
import Swal from "sweetalert2";
import AlertDialog from "./Dialoge";

interface IProps {
  previewSource: string;
  setPreviewSource: React.Dispatch<React.SetStateAction<string>>;
  formData: IProfile;
  file: File | undefined;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  setFormData: React.Dispatch<React.SetStateAction<IProfile>>;
}
export const FormContorller: React.FC<IProps> = ({
  previewSource,
  setPreviewSource,
  formData,
  setFile,
  file,
  setFormData,
}) => {
  const [skill, setSkill] = useState<any>();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const photoRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfile>();

  function addSkill() {
    if (skill.trim() === "") {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    const isDuplicated = selectedSkills.find(
      (sk) => sk.trim() === skill.trim()
    );
    if (isDuplicated) return;
    setSelectedSkills((prev) => [...prev, skill]);
    setSkill("");
  }

  // handle file
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setFile(file);
    previewFile(file);
  };

  const previewFile = (file: File) => {
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
    if (!previewSource) {
      return;
    }
    // setInputValues((prev) => ({ ...prev, picture: previewSource }));
  };

  const onSubmit = handleSubmit(async (data: IProfile) => {
    if (!file) return;
    setLoading(true);
    // check the file type
    if (
      file?.type === "image/png" ||
      file?.type === "image/svg" ||
      file?.type === "image/jpeg" ||
      file?.type === "image/jpg" ||
      file?.type === "image/gif" ||
      file?.type === "image/tiff"
    ) {
      // submit data to server
      client.assets
        .upload("image", file, {
          contentType: file.type,
          filename: file.name,
        })
        .then(async (doc) => {
          const profile = await client.create<IProfile>({
            _type: "profiles",
            name: data.name,
            email: data.email,
            location: data.location.trim(),
            bio: data.bio,
            skills: data.skills,
            linkedIn: data.linkedIn,
            twitter: data.twitter,
            github: data.github,
            portfolio: data.portfolio,
            picture: {
              _type: "image",
              asset: { _type: "reference", _ref: doc._id },
            },
          });
          console.log(profile);
          if (profile) {
            setLoading(false);

            setFormData({
              name: "",
              bio: "",
              email: "",
              github: "",
              linkedIn: "",
              location: "",
              portfolio: "",
              skills: [],
              twitter: "",
            });

            setSelectedSkills([]);

            setPreviewSource("");

            showToastMsg("Registered successfully", "success");
          }
        })
        .catch((err) => {
          console.log(err);
          showToastMsg(err, "error");
          setLoading(false);
        });
    } else {
      alert("Please use valid image, " + file.type + " is not supported");
    }
  });

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

  return (
    <div
      style={{
        overflowY: "scroll",
        height: "100vh",
      }}
      className="col form-group px-4 "
    >
      <div style={{ marginTop: "40px" }}>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "22px",
            marginTop: "4px",
          }}
        >
          We are building a list of different Somalis that work in a tech
          company as a developer, engineer, leads, CEOs, founders, etc.
        </p>
        <div
          style={{
            gap: "20px",
            marginBottom: "10px",
          }}
          className="d-flex align-items-center"
        >
          <div
            style={{
              gap: "5px",
            }}
            className="d-flex align-items-center"
          >
            <HowToRegIcon />
            <span>It's ok to nominate yourself!</span>
          </div>
          <div
            style={{
              gap: "5px",
            }}
            className="d-flex align-items-center"
          >
            <TaskAltIcon />
            <span>It's ok to nominate others!</span>
          </div>
        </div>
        <AlertDialog title="Requirement for registration ?" />
        <form onSubmit={onSubmit} className="mt-4 ">
          <div className="row">
            <div className="col">
              <FC fullWidth>
                <TextField
                  {...register("name", { required: true })}
                  // error={errors.name as boolean || undefined}
                  name="name"
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  value={formData.name}
                  type={"text"}
                  size="medium"
                  id="filled-basic"
                  label="Full Name"
                  variant="standard"
                />
                {errors.name && (
                  <span style={{ color: "red" }}>
                    This field cannot be blank
                  </span>
                )}
              </FC>
            </div>
            <div className="col">
              <FC fullWidth>
                <TextField
                  {...register("location", { required: true })}
                  value={formData.location}
                  type={"text"}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  size="medium"
                  id="filled-basic"
                  label="Location"
                  variant="standard"
                />
                {errors.location && (
                  <span style={{ color: "red" }}>
                    This field cannot be blank
                  </span>
                )}
              </FC>
            </div>
          </div>
          <FC sx={{ mt: 1 }} fullWidth>
            <TextField
              {...register("email", { required: true })}
              type={"email"}
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              size="medium"
              id="filled-basic"
              label="Email"
              variant="standard"
            />
            {errors.email && (
              <span style={{ color: "red" }}>This field cannot be blank</span>
            )}
          </FC>
          <FC sx={{ mt: 1 }} fullWidth>
            <TextField
              {...register("bio", { required: true })}
              value={formData.bio}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, bio: e.target.value }))
              }
              type={"text"}
              minRows={4}
              multiline={true}
              id="filled-basic"
              label="Short Bio"
              variant="standard"
            />
            {errors.bio && (
              <span style={{ color: "red" }}>This field cannot be blank</span>
            )}
          </FC>
          <SelectedSkills
            isEmpty={isEmpty}
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
          />
          <div
            style={{
              justifyContent: "space-between",
              marginTop: "33px",
            }}
            className="d-flex"
          >
            <FC fullWidth>
              <TextField
                error={errors.skills as boolean | undefined}
                onChange={(e) => setSkill(e.target.value)}
                value={skill}
                type={"text"}
                required={false}
                id="filled-basic"
                label="Add your skills i.e Python, Java... etc 👨‍💻"
                variant="standard"
              />
            </FC>
            <AddButton text="Add" type="button" callback={addSkill} />
          </div>
          <div
            style={{
              marginTop: "35px",
            }}
            className="row "
          >
            {/* inputs */}
            <div className="col">
              <FC fullWidth>
                <TextField
                  value={formData.github}
                  {...register("github", { required: true })}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, github: e.target.value }))
                  }
                  type={"url"}
                  size="medium"
                  id="filled-basic"
                  label="GitHub"
                  variant="standard"
                />
                {errors.github && (
                  <span style={{ color: "red" }}>
                    This field cannot be blank
                  </span>
                )}
              </FC>
              <FC sx={{ mt: 1 }} fullWidth>
                <TextField
                  {...register("linkedIn", { required: true })}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      linkedIn: e.target.value,
                    }))
                  }
                  value={formData.linkedIn}
                  type={"url"}
                  size="medium"
                  id="filled-basic"
                  label="LinkedIn"
                  variant="standard"
                />
              </FC>
              <FC sx={{ mt: 1 }} fullWidth>
                <TextField
                  {...register("twitter", { required: true })}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      twitter: e.target.value,
                    }))
                  }
                  value={formData.twitter}
                  type={"url"}
                  size="medium"
                  id="filled-basic"
                  label="Twitter"
                  variant="standard"
                />
              </FC>

              <FC sx={{ mt: 1 }} fullWidth>
                <TextField
                  {...register("portfolio", { required: true })}
                  value={formData.portfolio}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      portfolio: e.target.value,
                    }))
                  }
                  type={"url"}
                  size="medium"
                  id="filled-basic"
                  label="Portfolio"
                  variant="standard"
                />
              </FC>
              <div className="mt-2">
                <span
                  style={{
                    fontSize: "15px",
                    color: "#ddd",
                  }}
                >
                  You must include a URL where people can view your work, such
                  as Behance or another site.
                </span>
              </div>
            </div>
            {/* add image col */}
            <div className="col-12 col-sm-6  align-items-center justify-content-center  ">
              <div
                onClick={() => {
                  document
                    .querySelector<HTMLInputElement>(".myFileInput")
                    ?.click();
                }}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  background: "#222",
                  height: "100%",
                  borderRadius: "10px",
                }}
              >
                <input
                  ref={photoRef}
                  onChange={(e) => handleFile(e)}
                  formNoValidate
                  type="file"
                  style={{ opacity: 0 }}
                  // required
                  hidden
                  className="myFileInput"
                />

                <CloudUploadIcon
                  fontSize="large"
                  style={{
                    fontSize: "170",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "#c0c0c0",
                    gap: "5px",
                  }}
                >
                  <span>Click here to upload</span>
                  <span>280 x 280 px works best</span>
                  <span>Photo must be less than 3 mb</span>
                </div>
              </div>
            </div>
          </div>
          <Box textAlign={"center"} mt={5} mb={5}>
            {!loading ? (
              <Button
                fullWidth
                variant="contained"
                color="inherit"
                type="submit"
              >
                Submit
              </Button>
            ) : (
              <LinearProgress color="inherit" />
            )}
          </Box>
        </form>
      </div>
    </div>
  );
};
