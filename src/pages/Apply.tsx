import React, { useState, useEffect } from "react";
import { PreviewCard } from "../components";
import { FormContorller } from "../components/FormContorller";
import { IProfile } from "../types";

const Apply: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [previewSource, setPreviewSource] = useState("");
  const [file, setFile] = useState<File>();
  const [inputValues, setInputValues] = useState<IProfile>({
    name: "",
    email: "",
    location: "",
    skills: [],
    bio: "",
    github: "",
    twitter: "",
    linkedIn: "",
    portfolio: "",
  });

  return (
    <>
      <div
        style={{
          paddingLeft: "15px",
          overflowX: "hidden",
        }}
        className="row"
      >
        {/* Registeration Form Component */}
        <FormContorller
          file={file}
          setFile={setFile}
          formData={inputValues}
          setFormData={setInputValues}
          previewSource={previewSource}
          setPreviewSource={setPreviewSource}
        />
        {/* Preview Card Component */}
        <PreviewCard previewSource={previewSource} inputValues={inputValues} />
      </div>
    </>
  );
};

export default Apply;
