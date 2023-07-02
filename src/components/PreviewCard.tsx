import React from "react";
import { IProfile } from "../types";
import { ProfileCardPreview } from ".";

interface IProps {
  previewSource: string;
  inputValues: IProfile;
}
export const PreviewCard: React.FC<IProps> = ({
  previewSource,
  inputValues,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="col d-md-flex d-none color"
      >
        <span
          style={{ fontWeight: "bold", fontSize: "20px" }}
          className="mb-3 text-white"
        >
          Card Preview
        </span>
        <ProfileCardPreview
          previewSource={previewSource}
          inputValues={inputValues}
        />
      </div>
    </>
  );
};
