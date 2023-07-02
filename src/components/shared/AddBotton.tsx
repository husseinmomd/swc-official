import React from "react";

interface IProps {
  text: string;
  callback?: () => void;
  width?: string | number;
  borderRadius?: string;
  type?: "button" | "submit" | "reset" | undefined;
}
export const AddButton: React.FC<IProps> = ({
  callback,
  text,
  width,
  borderRadius,
  type,
}) => {
  return (
    <button
      type={type}
      style={{
        border: "1px solid #133774",
        width: width,
        borderRadius: borderRadius ? borderRadius : "3px",
      }}
      onClick={callback}
      className="add-btn"
    >
      {text}
    </button>
  );
};
